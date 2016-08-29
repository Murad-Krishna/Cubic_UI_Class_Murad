var person= {
    'fristname': 'Joe',
    'lastname': 'Doe',
    'dob': '12/12/1970',
    'age': '45',
    'address': '1234 ave',
    'email': 'ui@cubic.com'
};
    console.log(person);

var htmlContents="<table class='table table-stripped table-hover'>"+
                '<tr>'+
                    '<th> First Name </th>'+
                    '<td>'+person.fristname+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<th> Last Name </th>'+
                    '<td>'+person.lastname+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<th> Date of birth </th>'+
                    '<td>'+person.dob+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<th> Age </th>'+
                    '<td>'+person.age+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<th> Email </th>'+
                    '<td>'+person.email+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<th> Address </th>'+
                    '<td>'+person.address+'</td>'+
                '</tr>'+
                "</table>"
    function loadperson()
{
    document.getElementById('person').innerHTML=htmlContents;
    
}
//loadperson();
