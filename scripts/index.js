// BUDGET CONTORLLER
var budgetController = ( function() {

// some code

}());
// UI CONTROLLER
var UIController = ( function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',

    };


    return {
        getinput: function() {
            return{
                type: document.querySelector(DOMstrings.inputType).value, // will be either income or expense
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
}());

// GLOBAL APP CONTROLLER
var controller = ( function(budgetCtrl, UICtrl){
    
    var DOM = UIController.getDOMstrings();
    
    var ctrlAddItem = function() {
        // 1. get the field input data

        var input = UIController.getinput();
        console.log(input);

        // 2. add item to the budget controller

        // 3. add item to the ui

        // 4. calculate the budget

        // 5. display the budget on ui

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    // event parameters exist for all event listeners. we did not create it.
    // event.which is to test for older browsers which do not have the keyCode property.
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();

        }



    });

}(budgetController, UIController));
