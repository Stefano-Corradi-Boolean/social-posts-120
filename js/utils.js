const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

const getProfileImageTag = (author) => {
  const {name, image} = author;
  return `<img class="profile-pic" src="${image}" alt="${name}"> `
}

const getProfileInitialsTag = (author) => {
  const {name, image} = author;
  /*
      1. trasformo il name in una array usando come separatore lo spazion split (' ')
      2. con un ciclo creo un nuovo array con solo le iniziali
      3. concateno il nuovo array e lo restituisco
  
  */
 const letters = name.split(' ').map(nameSplit => nameSplit[0])
  return `<div class="profile-pic-default">
              <span>${letters.join('')}</span>
          </div>`
}

const formatDate = (dateStr) => {
  /*
      1. trasformo la stringa in un array usando il separatore -  -> split('-')
      2. rigiro l'array                                           -> reverse()
      3. creo una stringa dal nuovo array concatenando con /      -> join('/)
      4. restituisco la nuova stringa
  
  */

      return dateStr.split('-').reverse().join('/');
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// rendo disponibili tutte quelle che decido le funzioni ad essere importate
export { getProfileImageTag, getProfileInitialsTag , formatDate, getRandomNumber, alfabeto}