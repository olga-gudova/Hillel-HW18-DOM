
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

            $li.innerHTML = $ulInner;
        } else return 'Your array contains invalid elements';

        $ul.append($li);
    });

    document.body.append($ul)
}

const arr = [5, 86, [32, 94], 25, 1];

generateList(arr);