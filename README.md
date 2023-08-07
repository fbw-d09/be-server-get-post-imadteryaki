# Mini Webserver

## Zusammenfassung unseres neuen Wissen über Server :notebook_with_decorative_cover::orange_book::green_book:

Wir kennen die Module `http` und `fs`, um einen Mini-Webserver zu erstellen.

```js
let meinServer = http.createServer((req, res) => {
    // req (Anfrage)

    // res (Antwort)
    res.writeHead(200); // HTTP Status Code
    res.write("Okay!");
    res.end();
}
```

Die Methode `listen` um am Port einer TCP-Verbindung "lauschen" zu können:
```js
meinServer.listen(4711); // Meide Standardports! (wie 80)
```

Aus dem Anfrageobjekt (im obigen Beispiel `req`) bekommst wir alles nötige, das unser Browser beim Aufbau einer Verbindung mit dem Server mitteilt.

Beispiele für das was wir aus dem **request** bekommt: 
* die Methode der Kommunikation `req.method` (== "GET" oder "POST")
* die `req.url` (aus der du Resourcen-Pfad wie `/scripte/style.css` und/oder Parameter, wie `?suche=pferd` ablesen kannst)

Das Antwortobjekt (im Beispiel `res`) hat einige Methoden, um die Rückantwort zu ändern. Das Antwortobjekt ist ein schreibbarer Stream, der über Methoden wie `write(daten);` und `end(letzteDaten);` verfügt.

Beispiele, was wir mit dem **response** machen können:
* setzen des HTTP Status: `res.writeHead(200);` für okay! (oder 404 für nicht gefunden, oder 500 für Server-Fehler etc.)
* Daten schreiben `res.write("Aloha");` (beliebig oft/mehrmals möglich);
* letzte Daten schreiben, wenn der Stream enden soll mit `res.end("letzter Gruß");` (wobei das Argument optional ist, ihr könnt auch den Schreibstream schließen ohne noch Daten zu übergeben, also `res.end();`)

Euer gestarteter Server läuft in Endlosschleife und wird Anfragen antworten, bis irgendwas schief geht und er wegen einer Fehlermeldung abstürzt. Oder weil ihr auf dem Terminal `Strg+C` drückt, um den Node Prozess zu beenden. **Damit der Server läuft, muss der Terminal, in dem er geöffnet wurde, offen bleiben**

---
## :cartwheeling::weight_lifting::cartwheeling::weight_lifting::cartwheeling::weight_lifting::cartwheeling:
## Deine Aufgabe

Erstelle einen Server, wie oben beschrieben, der uns die Dateien eines Unterverzeichnisses zurück gibt. Lass den Server auf einem Port deiner Wahl mithören.


* Achte nur auf GET Anfragen. Für diese Übung ignorieren wir andere Methoden.
* Die Dateien, die im `dist`-Verzeichnis (engl. distribution = "Auslieferung") sind, sollen auf Anfrage an einen Browser mit HTTP Status 200 (ok) zurückgeliefert werden.

## Teste Deinen Server.

* Starte dein Node-Programm mit dem Server darin.
* Lass das Terminal offen (damit der Server weiter lauschen kann)
* navigiere mit einem Browser zu http://127.0.0.1:PORT, mit eben PORT = deiner gewählten Nummer.
* Das Laden der index.html und der verknüpften style.css sollte funktionieren.

## einen POST request hinzufügen

* Unser Server kann nicht nur Daten ausgeben, sondern auch Daten entgegennehmen, die vom Frontend gesendet werden
* Erstelle auf unserer index.html zusätzlich ein SignUp Form und sende deinen Namen, und E-mail an den Server mit einem POST Request



