const listItems = document.querySelectorAll('.productlist');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        // When user clicks on any list item, the below should occur
        if (!item.classList.contains('active')) {
            listItems.forEach(item => { item.classList.remove('active') });
            item.classList.add('active');
        }

        // To get the position of the active list item
        const position = getPositionOfActiveLi();
        function getPositionOfActiveLi() {
            for (let i = 0; i < listItems.length; i++) {
                if (listItems[i].classList.contains('active')) {
                    return i;
                }
            }
            return -1; // Return -1 if no li with "active" class is found
        }

        const spinnerNode = document.getElementById('spinNodeController');

        // We want to translate the respective image based on the position transformation
        const currentRotation = getCurrentRotation();
        function getCurrentRotation() {
            const transform = spinnerNode.style.transform;
            if (transform) {
                const match = transform.match(/rotate\(([-+]?\d+)deg\)/);
                if (match && match[1]) {
                    return parseInt(match[1]);
                }
            }
            return 0;
        }

        const highlighter = document.querySelector('.left-highlighter');
        let highlighterDistanceX = (position)*(100);
        highlighter.style.transform = 'translateX('+ highlighterDistanceX +'%)';

        // Calculate the new rotation angle
        let helix = 90 * (position);
        const rotationDifference = helix - currentRotation;
        if (rotationDifference > 180) {
            helix -= 360;
        } else if (rotationDifference < -180) {
            helix += 360;
        }
        // Set the new rotation for the spinnerNode
        spinnerNode.style.transform = 'rotate(' + helix + 'deg)';


        //TextDisplay on click of li element
        const textSections = document.querySelectorAll('.textSection');
        textSections.forEach(item=>{
            //Console log each item here
        });

        // To get the position of the active list item
        const positionActiveTextSection = getPositionOfActiveTextSection();
        function getPositionOfActiveTextSection() {
            for (let i = 0; i < textSections.length; i++) {
                if (textSections[i].classList.contains('active')) {
                    return i;
                }
            }
            return -1; // Return -1 if no li with "active" class is found
        }

        if(position !== positionActiveTextSection){
            textSections.forEach(item=>{
                item.classList.remove('active');
            });
            textSections[position].classList.add('active');
            // if(!textSections.children.classList.contains('active')){
            //     console.log(`'it doesn't contain active`);
            // }
            //setting the activeTextSectionChildren
            const activeTextSectionChildren = textSections[position].children;
            for (const child of activeTextSectionChildren) {
                child.classList.add('active');
            }

            console.log(activeTextSectionChildren);
        }

        console.log(item);

    });
});