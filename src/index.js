import '@babel/polyfill';
import serve, {thePort, theHost} from './server';

const main = (async () => {
  await serve.listen(thePort, () => {
    console.log(`Servidor :-)`);
    console.log(`http://${theHost}:${thePort}/`);
  });  
});

main();