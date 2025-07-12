const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor((Math.random() * 6)) + 1;
}

function rollDiceAlgorithm() {

    const inputTargetElement = document.querySelector('.control input');
    const inputValue = inputTargetElement.value;

    const diceRollListElement = document.querySelector('#dice-rolls');

    // 주사위 던진 기록 초기화
    diceRollListElement.innerHTML = '';

    let countRollDice = 0;
    let flag = true;

    while (flag) {
        // 주사위 굴리기 조건
        const tempDiceNumber = rollDice();
        if (tempDiceNumber === +inputValue) { // +를 통해 정수형으로 만들어 줌
            flag = false;
        }
        countRollDice++;

        // 주사위 굴린 기록 저장
        const newRollListElement = document.createElement('li');
        const outputText = "Roll " + countRollDice + " :" + tempDiceNumber;
        newRollListElement.textContent = outputText;
        diceRollListElement.appendChild(newRollListElement);
    }

    // 주사위 총 몇번 던짐? 목표 주사위 숫자는?
    const totalCountRollDice = document.querySelector('#output-total-rolls');
    const targetNumberRollDice = document.querySelector('#output-target-number');

    totalCountRollDice.textContent = countRollDice;
    targetNumberRollDice.textContent = inputValue;
}

rollDiceButtonElement.addEventListener('click', () => rollDiceAlgorithm());