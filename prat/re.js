import Computer from "./computer.js";

const hp = new Computer(
    "HP",
    16,
    512,
    "hp.avif"
);

const apple = new Computer(
    "Apple",
    32,
    512,
    "hp.avif"
);

const dell = new Computer(
    "DELL",
    16,
    256,
    "hp.avif"
);

const computerobjectarray = [hp, apple, dell];

export default computerobjectarray;