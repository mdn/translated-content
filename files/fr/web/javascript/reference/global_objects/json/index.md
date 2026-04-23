---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
l10n:
  sourceCommit: ab03131120acd9e210a5da979d685457e0762d2b
---

L'objet d'espace de noms **`JSON`** contient des méthodes statiques pour analyser des valeurs à partir de et convertir des valeurs vers la [notation d'objet JavaScript <sup>(angl.)</sup>](https://json.org/) ({{Glossary("JSON")}}).

## Description

Contrairement à la plupart des objets globaux, `JSON` n'est pas un constructeur. Vous ne pouvez pas l'utiliser avec [l'opérateur `new`](/fr/docs/Web/JavaScript/Reference/Operators/new) ni invoquer l'objet `JSON` comme une fonction. Toutes les propriétés et méthodes de `JSON` sont statiques (comme pour l'objet {{JSxRef("Math")}}).

## Différences entres JavaScript et JSON

JSON est une syntaxe pour sérialiser des objets, tableaux, nombres, chaînes de caractères, booléens et [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null). Elle est basée sur la syntaxe de JavaScript mais en est distincte&nbsp;: la plupart du JavaScript n'est _pas_ du JSON. Par exemple&nbsp;:

- Objets et tableaux
  - : Les noms de propriété doivent être des chaînes de caractères entre guillemets doubles&nbsp;; les [virgules finales](/fr/docs/Web/JavaScript/Reference/Trailing_commas) sont interdites.
- Nombres
  - : Les zéros initiaux sont interdits. Un point décimal doit être suivi d'au moins un chiffre. `NaN` et `Infinity` ne sont pas pris en charge.

Tout texte JSON est une expression JavaScript valide, mais uniquement après la révision [JSON superset <sup>(angl.)</sup>](https://github.com/tc39/proposal-json-superset). Avant la révision, U+2028 LINE SEPARATOR et U+2029 PARAGRAPH SEPARATOR sont autorisés dans les littéraux de chaînes et les clés de propriété en JSON&nbsp;; mais le même usage dans les littéraux de chaînes JavaScript provoque une {{JSxRef("SyntaxError")}}.

Les autres différences incluent l'autorisation uniquement des chaînes entre guillemets doubles et l'absence de prise en charge de {{JSxRef("undefined")}} ou des commentaires. Pour celles et ceux qui souhaitent utiliser un format de configuration plus convivial basé sur JSON, il existe [JSON5 <sup>(angl.)</sup>](https://json5.org/), utilisé par le compilateur Babel, et le plus couramment utilisé est [YAML](https://fr.wikipedia.org/wiki/YAML).

Le même texte peut également représenter des valeurs différentes dans les littéraux d'objet JavaScript et dans JSON. Pour plus d'informations, voir [Syntaxe des littéraux d'objet et JSON](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#notation_littérale_et_json).

### Grammaire complète de JSON

La syntaxe JSON valide est définie formellement par la grammaire suivante, exprimée en [ABNF <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form), et copiée depuis la [norme JSON IETF (RFC) <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc8259)&nbsp;:

```plain
JSON-text = ws valeur ws
début-tableau     = ws %x5B ws  ; [ crochet ouvrant
début-objet       = ws %x7B ws  ; { accolade ouvrante
fin-tableau       = ws %x5D ws  ; ] crochet fermant
fin-objet         = ws %x7D ws  ; } accolade fermante
séparateur-nom    = ws %x3A ws  ; : deux-points
séparateur-valeur = ws %x2C ws  ; , virgule
ws = *(
     %x20 /              ; Espace
     %x09 /              ; Tabulation horizontale
     %x0A /              ; Saut de ligne
     %x0D                ; Retour chariot
     )
valeur = false / null / true / objet / tableau / nombre / chaîne-de-caractères
false = %x66.61.6c.73.65   ; false
null  = %x6e.75.6c.6c      ; null
true  = %x74.72.75.65      ; true
objet = début-objet [ membre *( séparateur-valeur membre ) ]
         fin-objet
membre = chaîne-de-caractères séparateur-nom valeur
tableau = début-tableau [ valeur *( séparateur-valeur valeur ) ] fin-tableau
nombre = [ moins ] int [ frac ] [ exp ]
point-décimal = %x2E          ; .
chiffre1-9 = %x31-39           ; 1-9
e = %x65 / %x45            ; e E
exp = e [ moins / plus ] 1*DIGIT
frac = point-décimal 1*DIGIT
int = zéro / ( chiffre1-9 *DIGIT )
moins = %x2D               ; -
plus = %x2B                ; +
zéro = %x30                ; 0
chaîne-de-caractères = guillemet-double *char guillemet-double
char = non-échapé /
    échapé (
        %x22 /          ; "    guillemet double       U+0022
        %x5C /          ; \    barre oblique inversée U+005C
        %x2F /          ; /    barre oblique          U+002F
        %x62 /          ; b    retour arrière         U+0008
        %x66 /          ; f    saut de page           U+000C
        %x6E /          ; n    saut de ligne          U+000A
        %x72 /          ; r    retour chariot         U+000D
        %x74 /          ; t    tabulation             U+0009
        %x75 4HEXDIG )  ; uXXXX                       U+XXXX
échapé = %x5C           ; \
guillemet-double = %x22 ; "
non-échapé = %x20-21 / %x23-5B / %x5D-10FFFF
HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F, ou a-f
       ; HEXDIG équivalent à la règle HEXDIG dans [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT équivalent à la règle DIGIT dans [RFC5234]
```

Des {{Glossary("whitespace", "espaces blancs")}} insignifiants peuvent être présents n'importe où sauf dans un `JSONNumber` (les nombres ne doivent pas contenir d'espaces blancs) ou dans une `JSONString` (où ils sont interprétés comme le caractère correspondant dans la chaîne de caractères, ou provoqueraient une erreur). Les caractères tabulation (U+0009), retour chariot (U+000D), saut de ligne (U+000A) et espace (U+0020) sont les seuls caractères blancs valides.

## Propriétés statiques

- `JSON[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"JSON"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes statiques

- {{JSxRef("JSON.isRawJSON()")}}
  - : Teste si une valeur est un objet retourné par {{JSxRef("JSON.rawJSON()")}}.
- {{JSxRef("JSON.parse()")}}
  - : Analyse une portion de texte en tant que JSON, en transformant éventuellement la valeur produite et ses propriétés, puis retourne la valeur.
- {{JSxRef("JSON.rawJSON()")}}
  - : Crée un objet «&nbsp;raw JSON&nbsp;» contenant une portion de texte JSON. Lorsqu'il est sérialisé en JSON, l'objet raw JSON est traité comme s'il était déjà une portion de JSON. Ce texte doit être un JSON valide.
- {{JSxRef("JSON.stringify()")}}
  - : Retourne une chaîne de caractères JSON correspondant à la valeur définie, en incluant éventuellement seulement certaines propriétés ou en remplaçant les valeurs des propriétés d'une manière définie par l'utilisateur·ice.

## Exemples

### Exemple JSON

```json
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
```

Vous pouvez utiliser la méthode {{JSxRef("JSON.parse()")}} pour convertir la chaîne JSON ci-dessus en un objet JavaScript&nbsp;:

```js
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));
```

### Sérialisation des nombres sans perte

JSON peut contenir des littéraux numériques de précision arbitraire. Cependant, il n'est pas possible de représenter tous les nombres JSON exactement en JavaScript, car JavaScript utilise une représentation en virgule flottante qui a une précision fixe. Par exemple, `12345678901234567890 === 12345678901234567000` en JavaScript car ils ont la même représentation en virgule flottante. Cela signifie qu'il n'existe aucun nombre JavaScript qui corresponde précisément au nombre JSON `12345678901234567890`.

Supposons que vous ayez une représentation exacte d'un certain nombre (soit via {{JSxRef("BigInt")}} ou une bibliothèque personnalisée)&nbsp;:

```js
const data = {
  // Utiliser un BigInt ici pour stocker la valeur exacte,
  // mais cela peut également être une bibliothèque de nombres à haute précision personnalisée,
  // si le nombre n'est pas un entier.
  gross_gdp: 12345678901234567890n,
};
```

Vous souhaitez le sérialiser, puis l'analyser pour obtenir exactement le même nombre. Cela pose plusieurs difficultés&nbsp;:

- Du côté de la sérialisation, pour obtenir un nombre dans JSON, vous devez passer un nombre à `JSON.stringify`, soit via la fonction `replacer`, soit via la méthode `toJSON`. Mais, dans les deux cas, vous avez déjà perdu de la précision lors de la conversion du nombre. Si vous passez une chaîne de caractères à `JSON.stringify`, elle sera sérialisée en tant que chaîne de caractères, et non en tant que nombre.
- Du côté de l'analyse, tous les nombres ne peuvent pas être représentés exactement. Par exemple, `JSON.parse("12345678901234567890")` renvoie `12345678901234568000` car le nombre est arrondi au nombre représentable le plus proche. Même si vous utilisez une fonction `reviver`, le nombre sera déjà arrondi avant que la fonction `reviver` ne soit appelée.

Il existe généralement deux façons de garantir que les nombres sont convertis sans perte en JSON et réanalysés&nbsp;: l'une implique un nombre JSON, l'autre une chaîne de caractères JSON. JSON est un format de communication. Si vous utilisez JSON, vous communiquez donc probablement avec un autre système (requête HTTP, stockage dans une base de données, etc.). La meilleure solution à choisir dépend du système destinataire.

#### Utiliser des chaînes de caractères JSON

Si le système destinataire ne dispose pas des mêmes capacités de traitement JSON que JavaScript et ne prend pas en charge les nombres à haute précision, vous pouvez sérialiser le nombre sous forme de chaîne de caractères, puis le traiter comme une chaîne de caractères côté destinataire. Il s'agit également de la seule option disponible dans les anciennes versions de JavaScript.

Pour définir comment les types de données personnalisés (y compris `BigInt`) doivent être sérialisés en JSON, ajoutez soit une méthode `toJSON` à votre type de données, soit utilisez la fonction `replacer` de {{JSxRef("JSON.stringify()")}}.

```js
// Utiliser la méthode toJSON()
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const str1 = JSON.stringify(data);

// Utiliser JSON.stringify() avec replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return value.toString();
  }
  return value;
});
```

Dans les deux cas, le texte JSON ressemblera à `{"gross_gdp":"12345678901234567890"}`, où la valeur est une chaîne de caractères et non un nombre. Ensuite, du côté du destinataire, vous pouvez analyser le JSON et traiter la chaîne de caractères.

#### Utiliser des nombres JSON

Si le destinataire de ce message prend en charge nativement les nombres à haute précision (tels que les entiers Python), il est évidemment préférable de transmettre les nombres sous forme de nombres JSON, car ils peuvent être directement analysés en tant que type à haute précision au lieu d'analyser une chaîne de caractères à partir de JSON, puis d'analyser un nombre à partir de la chaîne de caractères. En JavaScript, vous pouvez sérialiser des types de données arbitraires en nombres JSON sans produire d'abord une valeur numérique (ce qui entraînerait une perte de précision) en utilisant {{JSxRef("JSON.rawJSON()")}} pour définir précisément ce que doit être le texte source JSON.

```js
// Utiliser la méthode toJSON()
BigInt.prototype.toJSON = function () {
  return JSON.rawJSON(this.toString());
};
const str1 = JSON.stringify(data);

// Utiliser JSON.stringify() avec replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return JSON.rawJSON(value.toString());
  }
  return value;
});
```

Le texte transmis à `JSON.rawJSON` est traité comme s'il s'agissait déjà d'un élément JSON, il ne sera donc pas sérialisé à nouveau sous forme de chaîne de caractères. Par conséquent, le texte JSON ressemblera à `{"gross_gdp":12345678901234567890}`, où la valeur est un nombre. Ce JSON peut ensuite être analysé par le destinataire sans traitement supplémentaire, à condition que le système destinataire n'ait pas les mêmes limitations de précision que JavaScript.

Lorsque vous analysez du JSON contenant des nombres de haute précision dans JavaScript, soyez particulièrement vigilant, car lorsque `JSON.parse()` invoque la fonction `reviver`, la valeur que vous recevez est déjà analysée (et a perdu de sa précision). Vous pouvez utiliser le paramètre `context.source` de la fonction `reviver` de {{JSxRef("JSON.parse()")}} `reviver` pour réanalyser le nombre vous-même.

```js
const parsedData = JSON.parse(str, (key, value, context) => {
  if (key === "gross_gdp") {
    // Or use the constructor of your custom high-precision number library
    return BigInt(context.source);
  }
  return value;
});
// { gross_gdp: 12345678901234567890n }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Comparer du JSON <sup>(angl.)</sup>](https://json-diff.com/)
- [Embellir/éditer du JSON <sup>(angl.)</sup>](https://jsonbeautifier.org/)
- [Analyser du JSON <sup>(angl.)</sup>](https://jsonparser.org/)
- [Valider du JSON <sup>(angl.)</sup>](https://tools.learningcontainer.com/json-validator/)
