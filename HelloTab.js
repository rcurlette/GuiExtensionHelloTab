Type.registerNamespace("RC");

RC.HelloTab = function RC$HelloTab$HelloTab(element) {
    console.log('Constructor');
    Tridion.OO.enableInterface(this, "RC.HelloTab");
    this.addInterface("Tridion.Controls.DeckPage", [element]); //My extension is like this
};

RC.HelloTab.prototype.initialize = function HelloTab$initialize()
{
    console.log('init');
    this.callBase("Tridion.Controls.DeckPage", "initialize");
    $evt.addEventHandler($display.getItem(), "load", this.getDelegate(this.updateView));
};

RC.HelloTab.prototype.select = function HelloTab$select() {
    var c = $display.getItem();
    $j("#compUri").text(c.getId());
    console.log('select');
    this.callBase("Tridion.Controls.DeckPage", "select");
    this.updateView();
};

RC.HelloTab.prototype.updateView = function HelloTab$updateView()
{
    console.log('update');
    if (this.isSelected()) 
    {
        console.log('selected')           
    }
};

Tridion.Controls.Deck.registerPageType(RC.HelloTab, "RC.HelloTab");