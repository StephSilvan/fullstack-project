export const mapSpeed = (race) => {
    let speed = 0;
    if (race === "Human" || race === "Half-Orc" || race === "Half-Elf" || race === "Elf" || race === "Dragonborn" || race === "Tiefling") {
        speed = 30;
    } else {
        speed = 25;
    }
    return speed;
}