const updateSkill = (idSkill, number) => {
    document.querySelector(`#${idSkill} .skill__progress`).style.width = `${number}%`
    document.querySelector(`#${idSkill} .skill__value`).textContent = `${number} / 100`
}

updateSkill('skill1', prompt('Zadejte vaši úroveň znalostí HTML na škále 1–100: '))
updateSkill('skill2', prompt('Zadejte vaši úroveň znalostí CSS na škále 1–100: '))
updateSkill('skill3', prompt('Zadejte vaši úroveň znalostí JavaScript na škále 1–100: '))
