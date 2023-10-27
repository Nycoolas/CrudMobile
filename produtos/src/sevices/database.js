// database.js
import Dexie from 'dexie';

export const database = new Dexie('Produtos');
database.version(1).stores({
  prudutos: '++id, nome, preco, quantidade', 
});
