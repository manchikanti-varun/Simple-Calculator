function add()
{
    a=parseInt(document.Calculator.number1.value);
    b=parseInt(document.Calculator.number2.value);
    c=a+b;
    document.Calculator.total.value=c;   
}
function sub()
{
    a=parseInt(document.Calculator.number1.value);
    b=parseInt(document.Calculator.number2.value);
    c=a-b;
    document.Calculator.total.value=c;   
}
function mul()
{
    a=parseInt(document.Calculator.number1.value);
    b=parseInt(document.Calculator.number2.value);
    c=a*b;
    document.Calculator.total.value=c;   
}
function div()
{
    a=parseInt(document.Calculator.number1.value);
    b=parseInt(document.Calculator.number2.value);
    c=a/b;
    document.Calculator.total.value=c;   
}
function mod()
{
    a=parseInt(document.Calculator.number1.value);
    b=parseInt(document.Calculator.number2.value);
    c=a%b;
    document.Calculator.total.value=c;   
}