// BUDGET CONTORLLER
var budgetController = ( function() {

// some code

}());
// UI CONTROLLER
var UIController = ( function() {

// SOME CODE

}());

// GLOBAL APP CONTROLLER
var controller = ( function(budgetCtrl, UICtrl){
    var ctrlAddItem = function() {
        // 1. get the field input data

        // 2. add item to the budget controller

        // 3. add item to the ui

        // 4. calculate the budget

        // 5. display the budget on ui
        
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    // event parameters exist for all event listeners. we did not create it.
    // event.which is to test for older browsers which do not have the keyCode property.
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

}(budgetController, UIController));




