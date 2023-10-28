 function generateID() {
    const characters = '0123456789abcdef';
    
    let uuid = '';

    for (let i = 0; i < 32; i++) {
      const randomNumber = Math.floor(Math.random() * 16);
      
      const character = characters.charAt(i === 12 ? 4 : i === 16 ? (randomNumber & 3) | 8 : randomNumber);
      
      uuid += character;
      
      if (i === 7 || i === 11 || i === 15 || i === 19) {
        uuid += '-';
      }
    }
    
  return uuid
}

let id = generateID() 

console.log(`UUID: ${id}`);
