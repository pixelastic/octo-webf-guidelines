# CSS

## Fichiers

### Découper les fichiers par modules et non par page
CSS permet de réutiliser des éléments sur plusieurs pages. Si vous devez
découper un gros fichier en plusieurs petits, faites la séparation au niveau
des modules (tabs, formulaire, modal, etc) plutot qu'au niveau des pages.

## Syntaxe

Il est important de garder une cohérence dans la syntaxe utilisée. Cela permet
de scanner visuellement le document beaucoup plus rapidement et aide à la
maintenabilité.

La syntaxe recommandée est la suivante :

    ul li a.active,
    ul li a:hover {
      text-decoration: none;
      color: #FFFFFF;
    }

- Un seul sélecteur par ligne
- Mettre `{` sur la ligne du sélecteur, précédée d'un espace
- Mettre le `}` sur sa propre ligne
- Une seule règle par ligne
- Mettre un espace après le `:` mais pas avant

_Exceptions : Pour les sélecteurs uniques, qui ne comportent qu'une seule
règle, on peut les mettre sur une ligne pour améliorer la lisibilité. Exemple
: `.span1 { width: 60px; }_

## Sélecteurs

### Ne pas utiliser d'id
Les ids ne peuvent être utilisés qu'une seule fois dans une page, rendant leur
style très peu mutualisable. De plus, ils ont une spécificité plus forte que
les classes rendant leur overwrite plus difficile.

### Ne pas surqualifer les sélecteurs
Plus un sélecteur est qualifié, plus il est difficile à overwriter et donc
moins il est mutualisable. Il faut supprimer les surqualifications de ses
sélecteurs autant que possible.

    BAD
    table.my-table thead > th {
      background: grey;
    }

    GOOD
    .my-table th {
      background: grey;
    }

### Ne pas utiliser le sélecteur universel `*`
Ce sélecteur va matcher absolument toutes les balises de la page et est très
couteux en terme de performances.

### Préférer les sélecteurs de balise plutot que les sélecteurs de classe
Un sélecteur de balise est plus rapidement rendu par le navigateur, et sa
spécificité étant plus basse, il est plus facilement overwritable. Attention
toutefois à n'utiliser que des balises qui ont du sens sémantiquement (`label`,
`address` par exemple mais pas `span` ou `div`).

### Utiliser des double quotes pour les sélecteurs d'attributs
Les quotes sont parfois optionnelles pour les selecteurs d'attributs, mais il
est préférable pour la cohérence de toujours en utiliser.

### S'assurer de la présence de styles `:focus`
Les utilisateurs qui naviguent au clavier ont besoin d'une indication visuelle
pour leur montrer l'élément actuellement sélectionné. Une bonne pratique est de
toujours mettre un `focus` là où on mettrai un `:hover`.

## Noms de classes

### Utiliser des traits d'union plutot que du camelCase ou des underscores
C'est la convention déjà utilisée par des projets comme Bootstrap ou
HTML5Boilerplate.

### Utiliser des noms qui reflètent la fonction de l'élément
Le nom de la classe doit refléter la fonction de l'élement, et non pas la
manière dont il est représenté.

    BAD
    .big-red-button {
      color: red;
    }

    GOOD
    .button-warning {
      color: red;
    }

### Ne pas laisser les abbréviations masquer le sens de la classe
La fonction d'une classe doit être facilement compréhensible par un nouveau
développeur à partir de son nom.

    BAD
    .ma {
      ...
    }

    GOOD
    .article-main {
      ...
    }

### Utiliser des classes étendables et réutilisables
Si plusieurs éléments partagent des styles comment, il faut essayer de les
regrouper sous un nom de classe générique et créer des classes spécifiques qui
étendent cette classe principale pour les cas particuliers.

    BAD
    <button class="button-valid">Ok</button>
    <button class="button-cancel">Cancel</button>
    <button class="button-back">Back</button>

    .button-valid {
      width: 140px;
      padding: 10px;
      margin-right: 5px;
      background: green;
    }
    .button-cancel {
      width: 140px;
      padding: 10px;
      margin-right: 5px;
      background: red;
    }
    .button-back {
      width: 60px;
      padding: 5px;
      margin-right: 5px;
      background: green;
    }

    GOOD
    <button class="button button-valid">Ok</button>
    <button class="button button-cancel">Cancel</button>
    <button class="button button-small">Back</button>

    .button {
      width: 140px;
      padding: 10px;
      margin-right: 5px;
    }
    .button-cancel {
      background: red;
    }
    .button-valid {
      background: green;
    }
    .button-small {
      width: 60px;
      padding: 5px;
    }

### Utiliser `js-` pour définir les classes utilisées par javascript
Séparer les classes de comportement (`js-*`) des classes de style permet de
pouvoir plus facilement modifier le markup sans gêner les scripts.

## Règles

### Toujours mettre un `;` à la fin des règles.
Même si le `;` est facultatif pour la dernière règle, on l'ajoute pour la
cohérence et pour éviter les copier-coller malheureux.

### Economiser les reflow avec des `border` `transparent`
Si vous ajoutez un border à un élément lors d'un `:hover`, le browser doit
effectuer un reflow car les dimensions de l'élément ont changées. Si par contre
vous changez simplement sa couleur, il n'a qu'un repaint à effectuer. Il est
donc intéressant de définir l'état de base de l'élément avec un `border`
`transparent`.

## Propriétés

### Groupez les propriétés de manière consistante
_Les propriétés devraient toujours être listées selon le même ordre, afin de
faciliter la lecture (et permettre un meilleur gzip). Mais quel ordre choisir
? Alphabétique ? Type (Positionning, Display, Other)_

## Valeurs

### Utiliser des majuscules pour les valeurs hexadécimales
Majuscules ou minuscules sont interprétées de la même manière, mais toujours
utiliser le même format aide à la cohérence.

    BAD
    form input[type=radio] { ... }

    GOOD
    form input[type="radio"] { ... }


### Ne pas utiliser d'unités quand on mets une valeur à zéro
Qu'elle soit en `em`, en `px` ou en `%`, une valeur à zéro sera toujours nulle,
il est donc inutile de préciser son unité.

     BAD
     margin:0px;
     line-height:0em;

     GOOD
     margin:0;
     line-height:0;

## Icones

### Sprites ou Fonts ?
Pour afficher des icones, il existe deux méthodes principales en CSS : les
sprites, ou les fonts d'icônes. Globalement les sprites offrent une meilleure
compatibilité mais sont plus fragiles alors que les fonts restent une feature
jeune mais offrant plus de flexibilité.

#### Sprite
Un sprite est une image qui contient toutes les icones que l'on veut utiliser.
Il suffit ensuite de jouer avec les `background-position` pour afficher l'icone
que l'on souhaite. En cumulant toutes les icones en une seule image, on
économise sur les requetes HTTP.

Générer des sprites à la main et mettre à jour le fichier CSS correspondant est
complexe. Heureusement il existe des outils [en
ligne](http://www.spritecow.com/) ou en [tache
grunt](https://www.npmjs.org/package/grunt-sprite-generator) pour nous
faciliter la tâche.

Les sprites sont très dépendants des dimensions de l'élément où ils sont
utilisés. Si l'élément grandit (suite à un texte plus long, une taille de
police augmentée, un zoom dans le navigateur), alors des problèmes d'affichage
peuvent apparaitre. Le plus fréquent est l'affichage de plusieurs icônes, les
`background-position` n'étant plus correctement alignés.

#### Icon fonts
Les fonts d'icones sont des fonts custom qui définissent des icones pour
certains caractères. Étant considérés comme du texte, elles peuvent être stylés
en CSS (taille, couleur, etc). Il faut toutefois les limiter à des icones d'une
seule couleur.

On priviligiera les fonts qui mappent des codes UTF-8 existants vers les icones
correspondantes, pour faciliter l'accessibilité. Pour les icones qui n'existent pas en UTF-8 (RSS, Twitter,
GitHub, etc) on peut utiliser une custom font et
[unicode-range](https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-range).



## Outils

### Recess
Outil de validation CSS de Twitter (http://twitter.github.io/recess/).
L'outil ne fait pas validation de syntaxe, il faut donc faire attention à le
passer sur un fichier qui est déjà correct syntaxiquement. Un fichier de
configuration est disponible dans `./tools`. Il est appeller avec `recess
--config /path/to/file`.

### CSSLint
https://github.com/CSSLint/csslint

Existe en module node, ou en ligne de commande en python. Il vérifie la syntaxe
du fichier CSS avant de tester les règles. Il est possible de configurer les
règles que l'on souhaite ou non employer, mais la syntaxe pour le faire est peu
pratique. Les deux implémentations (node et python) ne sont pas identiques.

### SCSS Lint
__À développer __
https://github.com/causes/scss-lint




## TODO

  - taille de font de base à mettre sur le body, min 14px, utiliser des em
  ensuite.
  - centrer du texte verticalement avec un line-height égal au height du parent


