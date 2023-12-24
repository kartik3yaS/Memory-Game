import computer from "./computer.js";

const desktop=new computer(
    "config1",
    "custom build",
    "uhd monitor",
    64,
    1000
);
const laptop=new computer(
    "config2",
    "hp",   
    "lcd",
    16,
    512
);

const computerobjectarray=[desktop, laptop];
export default computerobjectarray; 