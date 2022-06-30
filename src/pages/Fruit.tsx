import React from "react";
import {useParams} from "react-router-dom";
import {getFruitFacts, findFruit} from "../store/fruits";

const colors = [
    "#cccccc",
    "#000000",
    "#333333",
    "#8cacca",
    "#f0f8ff",
    "#faebd7",
    "#00ffff",
    "#7fffd4",
    "#f0ffff",
    "#f5f5dc",
    "#ffe4c4",
    "#000000",
    "#ffebcd",
    "#0000ff",
    "#8a2be2",
    "#a52a2a"
];
const fontFamilies = [
    "\"Arial Black\", Gadget, sans-serif",
    "Arial, Helvetica, sans-serif",
    "\"Century Gothic\", sans-serif",
    "\"Courier New\", Courier, monospace",
    "\"Crimson Text\", sans-serif",
    "\"Droid Sans\", sans-serif",
    "\"Droid Serif\", sans-serif",
    "Georgia, \"Times New Roman\", Times, serif",
    "Helvetica, \"Helvetica Neue\", Arial, sans-serif",
    "\"Roboto\", sans-serif",
    "Sans Serif, Arial",
    "\"Times New Roman\", Times, serif",
    "Verdana, Geneva, sans-serif"
];
const sizes = [
    "1rem", "2rem", "3rem", "4rem", "5rem"
];

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawFact(fact: string) {
    const randomColor = colors[getRandomInt(0, colors.length - 1)];
    const randomSize = sizes[getRandomInt(0, sizes.length - 1)];
    const randomFamily = fontFamilies[getRandomInt(0, fontFamilies.length - 1)];

    return (
        <li style={{
            fontFamily: randomFamily,
            fontSize: randomSize,
            letterSpacing: getRandomInt(-5, 5),
            color: randomColor,
            margin: "5px"
        }}>{fact}</li>
    )
};

export default function Fruit() {
    const params = useParams();
    const fruit = findFruit(params.fruitName);
    const fruitFacts = getFruitFacts(fruit.name);

    return (
        <main style={{
            backgroundColor: fruit.background
        }}>
            <h1>{fruit.name}</h1>
            <ul className="list-unstyled">
                {fruitFacts.map(drawFact)}
            </ul>
        </main>
    )
}
