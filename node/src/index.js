"use strict";

/**
 * 
 * @param {Array<string>} argv 
 */
function main(argv) {
    const nb_floor = parseInt(argv[2], 10);

    if (isNaN(nb_floor)) { 
        throw 'Parameter is not a number!'; 
    }
    let nb_line = 4;
    const last_line_length = 7;
    let nb_space_middle = Math.floor(last_line_length / 2);
    let nb_space = Math.floor(last_line_length / 2);
    let nb_leaf = 1;

    for (let line = 0; line < nb_line; line++) {
        let str = '';
        for (let index = 0; index < nb_space; index++) {
            str += ' ';
        }
        for (let index = 0; index < nb_leaf; index++) {
            str += '*';
        }
        console.log(str);
        nb_leaf += 2;
        nb_space -= 1;
    }
    nb_space = nb_space_middle - nb_floor + 1;
    for (let line = 0; line < nb_floor; line++) {
        let str = '';
        for (let index = 0; index < nb_space; index++) {
            str += ' ';
        }
        for (let index = 0; index < nb_floor; index++) {
            str += '|';
        }
        console.log(str);
    }

}

if (process.argv.length !== 3)
{
    console.error('Need 1 argument');
    process.exit(1);
}
main(process.argv);