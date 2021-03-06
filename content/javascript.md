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

### Toujours utiliser `===` pour les égalités
Javascript possède ce fantastique concept de variables _truthy_ ou _falsy_ qui
rends les comparaison à base de `==` sujettes à de nombreux effets de bords. Il
est donc indispensable de tester ses égalités avec `===` qui teste à la fois
l'égalité des éléments, ainsi que leur type.
_lien vers vidéo wtfjs_

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

### Définir les variables en haut du bloc où elles sont définies
Lorsque Javascript s'execute, il remonte les définitions de variables en haut
du bloc où elles sont définies. Ce mécanisme s'appelle l'hoisting. Pour
simplifier la lisibilité, il est donc préférable de définir nos variables en
haut du bloc où elles sont utilisées.

    /* BAD */
    function foo() {
      var foo = 'bar';
      [...]
      var bar = 'baz'
    }

    /* GOOD */
    function foo() {
      var foo = 'bar';
      var bar = 'baz';
    }

Note: Le cours Javascript #3 de CodeSchool, The Hoisting Hills, explique très
bien ce principe, avec des exemples.

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

## Fonctions

### Self-Invocated Functions (SIF)
Lorsqu'on utilise une SIF, il est préférable d'entourer la fonction dans des
parenthèses pour lever le ambiguités et éviter des erreurs lors de la
minification.

    /* BAD */
    function() { 
      alert('bhou');
    }();

    /* GOOD */
    (function() {
      alert('bhou');
    })();

### Ne pas étendre les prototypes des types natifs
N'ajoutez jamais de méthodes custom sur les objets natifs (`String`, `Array`,
`Object`, etc). A la rigueur, si vous devez faire un shim pour un navigateur
qui n'implémente pas une certaine fonction, vérifier toujours la présence de
ladite fonction avant de la redéfinir.


## Templating

### Ne pas utiliser de HTML dans le Javascript
Mettre du HTML en dur dans du Javascript vous empêche de profiter des fonctions
de vérification de syntaxe ou de linting de votre IDE.

Essayez au maximum de garder le markup HTML dans des fichiers HTML (soit en les
chargeant en asynchrone, soit en définissant des templates dans la page avec
`<script language="template"></script>`.

### Ne pas définir de styles directement en Javascript
Ajouter des styles aux éléments du DOM manuellement depuis le Javascript est
similaire à utiliser l'attribut `style` dans le HTML : les styles ainsi
appliqués ont la précédence sur ce qui peut être défini sur le Javascript.

Si possible, ajoutez ou supprimez plutot des classes CSS sur l'élément.


## Tips and Tricks

### Lisibilité des boucles

Il est déconseillé d'écrire à la main les boucles d'itération sur les clés d'un
objet ou les éléments d'un tableau. Utilisez plutot les méthodes d'itération
(`_.each`, `angular.forEach`, etc) fournies par votre bibliothèque. Vous aurez
ainsi un code plus lisible et éviterez pas mal de edge-case.

## Outils

### Utilisez `moment` pour gérer les dates
Si vous avez besoin de faire le moindre travail sur des dates en Javascript,
`moment` est la meilleure bibliothèque disponible.

### Utiliser `lodash` ou `underscore`.
Ces deux bibliothèques exposent la variable `_` en global qui donne accès à un
sucre syntaxique très pratique (test de type, itération sur collection,
wrapping de fonctions). Nous recommandons lodash, pour sa compatibilité et ses
performances.

### JSHint
JSHint est une version paramétrable de JSLint. Vous trouverez un fichier
`.jshintrc` dans le dossier `./tools`, à utiliser dans vos projets.

### JSCS

JavaScript CodeStyle. Complémentaire à JSHint, vous permet de définir avec plus
de granularité vos conventions de code.


