# CSS

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
spécificité étant plus basse, il est plus facilement overwritable. De plus,
cela force à utiliser les balises qui ont du sens sémantiquement dans le
contexte.

### Utiliser des double quotes pour les sélecteurs d'attributs
Les quotes sont parfois optionnelles pour les selecteurs d'attributs, mais il
est préférable pour la cohérence de toujours en utiliser.

### S'assurer de la présence de styles `:focus`
Les utilisateurs qui naviguent au clavier ont besoin d'une indication visuelle
pour leur montrer l'élément actuellement sélectionné. Une bonne pratique est de
toujours mettre un `focus` là où on mettrai un `:hover`.

## Règles

### Toujours mettre un `;` à la fin des règles.
Même si le `;` est facultatif pour la dernière règle, on l'ajoute pour la
cohérence et pour éviter les copier-coller malheureux.

## Propriétés

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

## Outils

### Recess
__A développer__
[http://twitter.github.io/recess/]

Toutes les règles ne sont pas forcément adaptées à nos guidelines. En
particulier, la règle sur la surqualification de sélecteurs de Recess me
parait trop stricte. Elle refuse `.btn.active` comme étant trop qualifiée.

### CSSLint
__A développer__
[https://github.com/CSSLint/csslint]

Existe en commandline, mais avec une syntaxe d'options assez complexe. Ne peux
pas checker l'indentation (strip newline avant ses vérifications).




## TODO

- Grouper les règles ? Par ordre alphabétique, par type ?
