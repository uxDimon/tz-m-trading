import { writable } from "svelte/store";
import json from "./input.json";

// Рандомные 4 ключа для json
const getRandom = (max) => {
		return Math.floor(Math.random() * (max + 1));
	},
	pushRandomNumber = (max, keyList) => {
		// если max будет меньше чем итераций то будет ошибочка(
		const randomNumber = getRandom(max);

		const isRepeat = keyList.every((item) => {
			return randomNumber !== item;
		});

		if (isRepeat) {
			keyList.push(randomNumber);
		} else {
			pushRandomNumber(max, keyList);
		}
	},
	randomKey = [],
	list = [];

for (let index = 0; index < 4; index++) {
	pushRandomNumber(json.length - 1, randomKey);
}

export const traderList = writable([]);

for (const item of randomKey) {
	list.push(json[item]);
}

traderList.set(list);
