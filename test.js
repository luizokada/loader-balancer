const axios = require('axios');

const numReps = process.argv[2];


async function main() {

    for (let i = 0; i < numReps; i++) {
        await axios.get('http://localhost:3000')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("err");
            })
    }
}

main();