// Set a local variable populated by the environment variable $NAME
const INSTRUCTOR = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${INSTRUCTOR} rocks!`);
    await sleep(5000);
  }
}

main();
