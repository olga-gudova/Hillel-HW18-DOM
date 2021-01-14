function generateList(array) {
    const $ul = document.createElement('ul');
    
    array.forEach((el) => {
        let $li = document.createElement('li');

        if (!isNaN(el)) {            
            $li.textContent = el;
        } 

        else if (Array.isArray(el)) {
            let $ulInner = document.createElement('ul');

            el.forEach((elem) => {
                if (!isNaN(elem)) {
                    let $liInner = document.createElement('li');
                    $liInner.textContent = elem;
        
                    $ulInner.append($liInner);
                } else return 'Your inner array contains invalid elements';
            });

            $li.append($ulInner);

        } else return 'Your array contains invalid elements';

        $ul.append($li);
    });

    document.body.append($ul)
}

const arr = [5, 86, [32, 94], 25, 1];

generateList(arr);

// Вывести таблицу 10 × 10, заполненную числами от 1 до 100

const $table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let $tr = document.createElement('tr');

    for (let j = 1; j <= 10; j++) {
        let $td = document.createElement('td');
        $td.textContent = `${i*10 + j}`;

        $tr.append($td);
    }
    
    $table.append($tr);
}

document.body.append($table);