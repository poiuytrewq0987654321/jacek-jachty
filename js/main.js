$(document).ready(function () {
  
    // Use the given data to create 
    // the table and display it
    $('table').bootstrapTable({
      data: mydata
    });
  });
    var mydata = 
[
    {
        "obraz": "<a href='images/1.jpg'>link do obrazu</a>",
        "id": 1,
        "stocznia": "Jeanneau",
        "model": "NC 14",
        "kategoria": "jacht motorowy",
        "lokalizacja": "Murter",
        "dlugosc": 14,
        "szerokosc": 4.1,
        "rok_produkcji": 2017,
        "liczba_kabin": 2,
        "moc_silnika": "370 KM"
      },
      {
        "obraz": "<a href='images/2.jpg'>link do obrazu</a>",
        "id": 2,
        "stocznia": "test",
        "model": "NC 14",
        "kategoria": "jacht motorowy",
        "lokalizacja": "test",
        "dlugosc": 14,
        "szerokosc": 4.1,
        "rok_produkcji": 2017,
        "liczba_kabin": 2,
        "moc_silnika": "370 KM"
      }
];

