# Javascript

## Syntaxe

### Indenter avec deux espaces
Pour rester cohérents avec nos conventions HTML et CSS.

### Toujours ajouter les points-virgules en fin d'instruction.
Même s'ils [sont parfois
optionnels](http://mislav.uniqpath.com/2010/05/semicolons/), pour des questions
de robustesse lors de la concaténation/minification il est préférable de
toujours les ajouter.

### Utiliser des simple quotes pour les strings
Cela nous permet de pouvoir utiliser des double quotes dans le HTML et ainsi de
pouvoir inclure l'un dans l'autre si nécessaire.

### Ne pas ajouter d'espace dans le `()` ou les `[]`
Ces exemples parlent d'eux-même :

    /* BAD */
    if( condition ) {
      alert( foo[ 'bar' ] );
    }

    /* GOOD */
    if (condition) {
      alert(foo.bar);
    }


### Toujours ajouter les `{` et `}` sur les `if`, `while`, etc

Même si l'instruction ne prends qu'une ligne, il est préférable de toujours
ajouter les `{}`. Cela améliore la lisibilité et permet d'ajouter de nouvelles
instructions sans introduire de bugs (google: apple ssl bug).

    /* BAD */
    if (true) foo()

    /* BAD */
    if (true)
      foo()

    /* GOOD */
    if (true) {
      foo();
    }

## Variables

### Utiliser des variables en camelCase
C'est la convention appliquée par jQuery, Angular, Underscore, etc.

### Utiliser des constantes en MAJUSCULE_AVEC_UNDERSCORE
Si vous devez définir des constantes, utilisez cette notation pour les
différencier des variables classiques.

### Utiliser une majuscule à la première lettre des constructeurs
Si vous définissez une variable qui doit être appellée avec l'opérateur `new`,
alors mettez la première lettre en majuscule, afin d'identifier clairement que
c'est un constructeur.

## Objets

### Syntaxe de la définition
On préférera la syntaxe suivante pour les définitions d'objets :

    var foo = {
      bar: 'pouet',
      'new': 42,
      'long key': 'is long'
    };

### Ne pas mettre de quotes autour des clés des objets
La syntaxe JSON nécessite que l'on mette des double quotes autour des clés des
objets, mais cela n'est pas nécessaire en Javascript dans la majorité des cas.
Les seules exceptions sont pour les mots réservés (`new`, `var`, etc) et les
clés contenants des espaces ou des tirets.

### Preférer la notation `.` plutot que `[]` pour accèder à une clé
Il est possible d'accèder à la clé `bar` de l'objet `foo` soit avec `foo.bar`
ou `foo['bar']`. On préferera la première notation.

Les exceptions sont bien sur pour les clés avec des espaces ou tirets, ou les
mots réservés. On utilisera aussi la notation `[]` quand la clé est elle-même
une variable.






- règles jshint
- wrap SIF in parentheses
- triple equal
- pas de & et |
- do not extend native prototypes
- allow ternary, if simple case on one line
- définir la var .length dans les boucles for
- utiliser underscore/lowdash
- moment pour les dates
- pas de html dans le javascript. utiliser des style language="template"
- pas de style appliqués au dom, mieux utiliser classe (exception pour display
  hide)
- var a; var b ou var a, b ?



Work in progress
