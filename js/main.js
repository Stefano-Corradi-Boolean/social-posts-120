// importo l'array dei post
import posts from "./db.js";
// importo le funzioni che mi servono
import { getProfileImageTag, getProfileInitialsTag , formatDate , alfabeto} from './utils.js'

console.log(alfabeto);

// id dei post che mi piacciono
const userLiked = [3454, 23432, 14324]

/*
    1. reset
    2. stampo tutte le card

*/

const postList = document.querySelector('.posts-list');

// ciclo l'arry di oggetti
init();


/* GESTIONE LIKE ********************** */
// prendo tutti i bottoni
const likesButtons = document.querySelectorAll('.like-button');
const likesCounters = document.querySelectorAll('.js-likes-counter');
// ciclo tutti i bottoni, gli associo l'ID e gestisco l'evento click
likesButtons.forEach( (btn, index) => {
    console.log(posts[index].id);
    btn._postID = posts[index].id;
    btn._postIndex = index;
    btn.addEventListener('click', handleClickLikeBtn)
})


// FUNCTIONS //////////////////////
function handleClickLikeBtn(event){
    // neutralizzo la funzionalità del tag a
    event.preventDefault();
    console.log(this._postID);
    // mettto o tolgo la classe like-button--liked
    this.classList.toggle('like-button--liked');
    // se l'id non è presente lo pusho nell'array dei liked
    console.log(userLiked);
    if(!userLiked.includes(this._postID)){
        userLiked.push(this._postID)
        posts[this._postIndex].likes++;
    }else{
        // se non è incluslo lo tolgo
        const indexToRemove = userLiked.findIndex( lkId => lkId === this._postID )
        userLiked.splice(indexToRemove, 1)
        posts[this._postIndex].likes--;
    }
    console.log(userLiked);
    likesCounters[this._postIndex].innerHTML = posts[this._postIndex].likes;
};

function init(){
    // ad ogni cliclo genero  una card e la concateno a postList
    postList.innerHTML = '';
    posts.forEach( post => postList.innerHTML += getTemplatePost(post))
}
function getTemplatePost(post){
    // destrutturo post
    const {id, author, media, content, created, likes} = post;
    // const author = post.author;
    // const media = post.media;
    // const content = post.content;
    // const created = post.created;
    // const likes = post.likes;
    return `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${author.image ? getProfileImageTag(author) : getProfileInitialsTag(author)}                  
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${formatDate(created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button ${isLiked(id) ? 'like-button--liked' : ''} " href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
}


function isLiked(id){
    return userLiked.includes(id);
}

