# CSS

## Syntaxe

Il est important de garder une cohérence dans la syntaxe utilisée au niveau de
l'écriture des sélecteurs et des règles. 

La syntaxe recommandée est la suivante :

    ul li a.active,
    ul li a:hover {
      text-decoration: none;
      color: #FFFFFF;
    }

Dans le détail :

- Mettre chaque sélecteur sur sa propre ligne
- Mettre `{` sur la ligne du sélecteur, précédée d'un espace
- Mettre le `}` sur sa propre ligne
- Mettre un espace après le `:` mais pas avant
- Une seule règle par ligne (aide au debug)

_Exceptions : Pour les sélecteurs uniques, qui ne comportent qu'une seule
règle, on peut les mettre sur une ligne pour améliorer la lisibilité. Exemple
: `.span1 { width: 60px; }_

### Toujours mettre un `;` à la fin des règles.
Même si le `;` est facultatif pour la dernière règle, on l'ajoute pour la
cohérence et pour éviter les copier-coller malheureux.

### Utiliser des majuscules pour les valeurs hexadécimales
Majuscules ou minuscules sont interprétées de la même manière, mais cela aide
à la cohérence.

### Utiliser des double quotes pour les sélecteurs d'attributs
Les quotes sont parfois optionnelles pour les selecteurs d'attributs, mais il
est préférable pour la cohérence de toujours en utiliser.

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

