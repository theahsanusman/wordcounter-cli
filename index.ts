import inquirer from "inquirer";

type Answer = {
    paragraph: string;
}
async function wordCounter() {
    const answer: Answer = await inquirer.prompt([
        {
            type: "input",
            name: "paragraph",
            message: 'Enter a Paragraph'
        }
    ]);
    answer.paragraph = answer.paragraph.trim();
    const words = answer.paragraph.split(' ');
    const characters = words.join();
    console.log(`Word count: ${words.length}`);
    console.log(`Character count (excluding whitespaces): ${characters.length}`);
}
wordCounter();