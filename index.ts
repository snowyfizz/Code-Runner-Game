// index.ts - A comprehensive TypeScript starter script
class Project {
    public readonly version: string = "1.0.0";
    constructor(public readonly name: string) {}
    public displayInfo(): void { console.log(`Project: ${this.name}, v${this.version}`); }
}
const main = (): void => {
    const myProject = new Project("GitHub Auto-Repo Project");
    myProject.displayInfo();
    console.log("\nFeatures: Classes, Methods, Loops");
    for (let i: number = 0; i < 5; i++) { console.log(`  - Loop ${i + 1}`); }
};
main();
