"use strict";

const FIRST_ARGS_INDEX = 2;
const NB_LEAF_FIRST_LINE = 1;
const NB_LINE_FIRST_FLOOR = 4;
const NB_LEAF_ADDED_BY_LINE = 2;
/**
 * 
 * @param {Array<string>} argv 
 */
function main(argv) {

    // argv look like '[node, /path/scriptName.js, arg1, arg2, ...]'
    if (argv.length !== 3) {
        console.error('Need 1 argument');
        process.exit(1);
    }
    const nb_floor = parseInt(argv[FIRST_ARGS_INDEX], 10);

    if (isNaN(nb_floor)) {
        console.error('Nb floor is not a number');
        process.exit(1);
    }

    const nb_line_first_floor = NB_LINE_FIRST_FLOOR;
    const nb_leaf_first_line = NB_LEAF_FIRST_LINE;
    const nb_leaf_last_line = getMaxNbLeafMath(nb_leaf_first_line, nb_line_first_floor, nb_floor);
    const nb_char_middle = Math.floor(nb_leaf_last_line / 2);
    drawLeaf(nb_floor, nb_line_first_floor, nb_leaf_first_line, nb_char_middle);
    drawTrunk(nb_floor, nb_char_middle);
}

function drawLeaf(nb_floor, nb_line_first_floor, nb_leaf_first_line, nb_char_middle) {

    let nb_leaf = nb_leaf_first_line;
    let nb_space = nb_char_middle;

    for (let floor = 0; floor < nb_floor; floor++) {
        const nb_line_by_floor = nb_line_first_floor + floor;

        for (let line = 0; line < nb_line_by_floor; line++) {
            let str = '';
            for (let index = 0; index < nb_space; index++) {
                str += ' ';
            }
            for (let index = 0; index < nb_leaf; index++) {
                str += '*';
            }
            console.log(str);
            nb_leaf += NB_LEAF_ADDED_BY_LINE;
            nb_space -= (NB_LEAF_ADDED_BY_LINE / 2);
        }
        nb_leaf -= (2 * NB_LEAF_ADDED_BY_LINE);
        nb_space += 2 * (NB_LEAF_ADDED_BY_LINE / 2);
    }
}


function drawTrunk(nb_floor, nb_char_middle) {
    const nb_space = nb_char_middle - (nb_floor / 2);

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

function drawTrunkV2(nb_floor, nb_char_middle) {
    const nb_space = nb_char_middle - (nb_floor / 2);

    let str = '';
    for (let index = 0; index < nb_space; index++) {
        str += ' ';
    }
    for (let index = 0; index < nb_floor; index++) {
        str += '|';
    }

    for (let line = 0; line < nb_floor; line++) {
        console.log(str);
    }
}

function drawTrunkV2(nb_floor, nb_char_middle) {
    const nb_space = nb_char_middle - (nb_floor / 2);

    let str = '';
    for (let index = 0; index < nb_space; index++) {
        str += ' ';
    }
    for (let index = 0; index < nb_floor; index++) {
        str += '|';
    }
    
    for (let line = 0; line < nb_floor; line++) {
        console.log(str);
    }
}

/**
 * 
 * @param {number} nb_leaf 
 * @param {number} nb_line 
 * @param {number} nb_floor 
 * @returns 
 */
function getMaxNbLeafSimple(nb_leaf_start, nb_line_first_floor, nb_floor) {

    let nb_leaf = nb_leaf_start;
    let nb_leaf_sub = 0;

    for (let floor = 0; floor < nb_floor; floor++) {
        const nb_line_by_floor = nb_line_first_floor + floor;

        for (let line = 0; line < nb_line_by_floor; line++) {
            nb_leaf += NB_LEAF_ADDED_BY_LINE;
        }
        if (floor !== 0) {
            nb_leaf -= (2 * NB_LEAF_ADDED_BY_LINE);
        }
    }

    /*
     We add X leaf by line but the first line have already a defined number
     that's why we sub NB_LEAD_ADDED_BY_LINE;
    */
    nb_leaf -= NB_LEAF_ADDED_BY_LINE;

    return nb_leaf;
}

/**
 * 
 * @param {number} nb_leaf_start 
 * @param {number} nb_line_first_floor 
 * @param {number} nb_floor 
 * @returns 
 */
function getMaxNbLeafMath(nb_leaf_start, nb_line_first_floor, nb_floor) {

    let nb_line_tot = 0;

    for (let floor = 0; floor < nb_floor; floor++) {
        nb_line_tot += (nb_line_first_floor + floor);
    }

    /*
     We add X leaf by line but the first line have already a defined number
     that's why we do (nb_line_tot - 1) and add nb leaf in first line
    */
    const nb_leaf_tmp = (NB_LEAF_ADDED_BY_LINE * (nb_line_tot - 1)) + nb_leaf_start;

    // Between 2 floor we substract Y nb of leaf but not for the first floor
    const nb_leaf_sub = (2 * NB_LEAF_ADDED_BY_LINE) * (nb_floor - 1);

    return nb_leaf_tmp - nb_leaf_sub;

}
main(process.argv);