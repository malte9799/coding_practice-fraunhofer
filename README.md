# Palindromische Binärzahlen Summierer

## Beschreibung

In dieser Coding Challenge sollen Palindrome in einer Datei mit mehr als 5000 binären Einträgen (Zeichenketten aus 0 und 1) gefunden werden. Anschließend sollen die als Palindrom identifizierten Einträge in Dezimalwerte umgewandelt und danach aufaddiert werden.

## Aufgabenstellung

1. Finden Sie alle Palindrome in der Datei `numbers.txt`.
2. Wandeln Sie die gefundenen Palindrome in Dezimalwerte um.
3. Addieren Sie die Dezimalwerte der Palindrome.
4. Geben Sie den Gesamtwert aus.

### Beispiel

Für das Palindrom "10100101" ergibt sich der Dezimalwert:

```
  1 x 2^7 + 0 x 2^6 + 1 x 2^5 + 0 x 2^4 + 0 x 2^3 + 1 x 2^2 + 0 x 2^1 + 1 x 2^0
= 128     + 0       + 32      + 0       + 0       + 4       + 0       + 1
= 165
```

Das Palindrom "10100101" hat also den Dezimalwert 165.

## Dateien

- `numbers.txt`: Eine Datei, die eine Liste von Binärzahlen enthält.
- `python/main.py`: Ein Python-Skript, das die Summe der palindromischen Binärzahlen berechnet.
- `javascript/main.ts`: Ein TypeScript-Skript, das die Summe der palindromischen Binärzahlen berechnet.
- `javascript/tsconfig.json`: Die TypeScript-Konfigurationsdatei.
- `javascript/package.json`: Die Paketkonfigurationsdatei für das JavaScript-Projekt.

## Nutzung

### Python

1. Stelle sicher, dass Python installiert ist.
2. Navigiere zum Verzeichnis `python`.
3. Führe das Skript aus:

   ```sh
   python main.py
   ```

### JavaScript/TypeScript

1. Stelle sicher, dass Node.js und Bun installiert sind.
2. Navigiere zum Verzeichnis `javascript`.
3. Installiere die Abhängigkeiten:

   ```sh
   bun install
   ```
4. Führe das Skript aus:

   ```sh
   bun start
   ```

## Ergebnis

Das Ergebnis der Berechnung wird in der Konsole ausgegeben:

```
Der Gesamtwert aller Palindrom-Binärzahlen beträgt: 75709
```

## Autor

**Malte Hilpert**
