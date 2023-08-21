'use strict';

function fsqrt(args) {
    if (args.length != 2) {
        throw 'ERROR: sqrt command uses just 1 parameter';
    }
    let num = parseFloat(args[0]);
    if (isNaN(num)) {
        throw 'Illegal arguments detected';
    }
    console.log(Math.sqrt(num));
}

function fsum(args) {
    if (args.length < 3) {
        throw "ERROR: the "+" command uses at least 2 parameters";
    }
    var s = 0.0;
    for (var i = 0; i < args.length - 1; i++) {
        let val = parseFloat(args[i]);
        if (isNaN(val)) {
            throw "Illegal arguments detected";
        }
        s += val;
    }
    console.log(s);
}

function funiq(args) {
    if (args.length < 2) {
        throw "ERROR: - uniq command uses at least 1 parameter";
    }
    var a = [];
    for (var i = 0; i < args.length - 1; i++) {
        var val = parseFloat(args[i]);
        if (isNaN(val)) {
            throw "Illegal arguments detected";
        }
        if (a.indexOf(val) === -1) {
            a.push(val);
        }
    }
    var out = "";
    for (var i = 0; i < a.length; i++) {
        out = out + a[i] + " ";
    }
    console.log(out);
}
 function fdiv (args) {
    if (args.length < 3) {
        throw 'ERROR: div command uses at least 2 parameters';
    }
    let res = 0;
    for (let i = 0; i < args.length - 1; i++) {
        let num = parseFloat(args[i]);
        if (isNaN(num)) {
            throw 'Illegal arguments detected';
        }
        if (i == 0) {
            res = num;
        }
        else {
            res /= num;
        }
    }
    console.log(res);
}

function fcos(args) {
    if (args.length != 2) {
        throw "ERROR: cos command uses 1 parameter";
    }
    let val = parseFloat(args[0]);
    if (isNaN(val)) {
        throw "Illegal arguments detected";
    }
    console.log(Math.cos(val));
}

function fsin(args) {
    if (args.length != 2) {
        throw "ERROR: sin command uses 1 parameter";
    }
    let val = parseFloat(args[0]);
    if (isNaN(val)) {
        throw "Illegal arguments detected";
    }
    console.log(Math.sin(val));
}
function frev(args) {
    if (args.length < 2) {
        throw 'ERROR: - rev command uses at least 1 parameter';
    }
    let arr = [];
    for (let i = 0; i < args.length - 1; i++) {
        let num = parseFloat(args[i]);
        if (isNaN(num)) {
            throw 'Illegal arguments detected';
        }
        arr.push(num);
    }
    arr.reverse();
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + ' ';
    }
    console.log(str);
}
function fmax(args) {
    if (args.length < 2) {
        throw 'ERROR: - max command uses at least 1 parameter';
    }
    let arr = [];
    for (let i = 0; i < args.length - 1; i++) {
        let num = parseFloat(args[i]);
        if (isNaN(num)) {
            throw 'Illegal arguments detected';
        }
        arr.push(num);
    }
    console.log(Math.max(...arr));
}

 function fmod(args) {
    if (args.length != 3) {
        throw 'ERROR: mod command uses 2 parameters';
    }
    let numbx = parseInt(args[0], 10);
    if (isNaN(numbx)) {
        throw 'Illegal arguments detected';
    }
    let numby = parseInt(args[1], 10);
    if (isNaN(numby)) {
        throw 'Illegal arguments detected';
    }
    console.log(numbx % numby);
}
function fpwr(args) {
    if (args.length != 3) {
        throw 'ERROR: pwr command uses 2 parameters';
    }
    let numbx = parseFloat(args[0]);
    if (isNaN(numbx)) {
        throw "Illegal arguments detected";
    }
    let numby = parseFloat(args[1]);
    if (isNaN(numby)) {
        throw 'Illegal arguments detected';
    }
    console.log(Math.pow(numbx, numby));
}
function fsort(args) {
    if (args.length < 2) {
        throw 'ERROR: - sort command uses at least 1 parameter';
    }
    let arr = [];
    for (let i = 0; i < args.length - 1; i++) {
        let num = parseFloat(args[i]);
        if (isNaN(num)) {
            throw 'Illegal arguments detected';
        }
        arr.push(num);
    }
    arr.sort();
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + ' ';
    }
    console.log(str);
}

 function fmul (args) {
    if (args.length < 3) {
        throw 'ERROR: mul command uses at least 2 parameters';
    }
    let prod = 1;
    for (let i = 0; i < args.length - 1; i++) {
        let num = parseFloat(args[i]);
        if (isNaN(num)) {
            throw 'Illegal arguments detected';
        }
        prod *= num;
    }
    console.log(prod);
}


 function fmin(args) {
    if (args.length < 2) {
        throw 'ERROR: - min command uses at least 1 parameter';
    }
    let arr = [];
    for (let i = 0; i < args.length - 1; i++) {
        let num = parseFloat(args[i]);
        if (isNaN(num)) {
            throw 'Illegal arguments detected';
        }
        arr.push(num);
    }
    console.log(Math.min(...arr));
}

function fabs(args) {
        if (args.length != 2) {
            throw 'ERROR: abs command uses 1 parameter';
        }
        let numb = parseFloat(args[0]);
        if (isNaN(numb)) {
            throw 'Argument is not a number';
        }
        console.log(Math.abs(numb));
    }

function fsub(ar) {
    if (ar.length < 3) {
        throw 'ERROR: - command uses at least 2 parameters';
    }
    let x = 0.0;
    for (let i = 0; i < ar.length - 1; i++) {
        let vf = parseFloat(ar[i]);
        if (isNaN(vf)) {
            throw 'not a number';
        }
        if (i == 0) {
            x += vf;
        }
        else {
            x -= vf;
        }
    }
    console.log(x);
}




var cowsay = require("cowsay");
var pkginfo = require('pkginfo')(module);

if ((process.argv.length == 3 && (process.argv[2].localeCompare('help')==0)) || (process.argv.length == 2)) {
   var myname = module.exports.author.name;
   console.log(cowsay.say({
       text: 'Calculator, Author: ' + myname,
   }));
   console.log("help\n+\n-\nmul\ndiv\nmod\nsq\nabs\npwr\nsort\nrev\nmax\nmin\nuniq\ncos\nsin\n");
   process.exit(1);
}

try {
    process.argv.splice(0, 2);
    let ps = process.argv;
    let operand = ps[ps.length - 1];
    switch (operand) {
        case "max":
            fmax(ps);
            break;

        case "-":
            fsub(ps);
            break;

        case "mul":
            fmul(ps);
            break;

        case "div":
            fdiv(ps);
            break;

        case "mod":
            fmod(ps);
            break;

        case "abs":
            fabs(ps);
            break;

        case "pwr":
            fpwr(ps);
            break;

        case "rev":
            frev(ps);
            break;

        case "+":
            fsum(ps);
            break;

        case "uniq":
            funiq(ps);
            break;

        case "cos":
            fcos(ps);
            break;

        case "sin":
            fsin(ps);
            break;

        case "sqrt":
            fsqrt(ps);
            break;

        case "sort":
            fsort(ps);
            break;
       
        case "min":
            fmin(ps);
            break;

        default:
            console.log("ERROR: this command does not exist, use display to see available commands");
    }
}
catch (msg) {
    console.error(msg);
}