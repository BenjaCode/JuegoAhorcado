let words:string[] = [
    'COMPUTADORA',
    'TECLADO',
    'MOUSE',
    'MONITOR',
    'IMPRESORA',
    'TELEFONO',
    'CELULAR',
    'TABLET',
    'LAPTOP',
];

export function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}