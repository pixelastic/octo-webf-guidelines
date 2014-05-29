# HTML

## Sémantique

### Ne pas utiliser `<br />` pour séparer des éléments.
Pour séparer plusieurs groupes de texte, on utilisera des `<p>`. Pour espacer
des éléments d'interface, on utilisera du CSS.

### Utiliser les balises HTML existantes sémantiques si elles existent.
Ne pas utiliser d'éléments génériques comme `<div>` ou `<span>` si un élément
HTML existe déjà pour cette fonction. Utiliser par exemple `<ul>`, `<ol>` ou
`<dl>` pour une liste, ou `<table>` pour des données tabulaires.

### Tirer profit des balises `<table>` spécifiques.
`<thead>`, `<tbody>` et `<tfoot>` permettent de définir respectivement le
header, le body et le footer d'un tableau. Pour des raisons de performance
d'affichage, il est plus intéressant d'inclure le `<tfoot>` avant le `<tbody>`
dans le markup.

## Formulaires

### Ne pas mettre de bouton "Reset" sur les formulaires
Même si dans la spec, complétement inutile. Si le formulaire a besoin d'un tel
bouton, c'est qu'il est trop complexe.

### Toujours lier des `<label>` aux champs d'input.
Pour des raisons d'accessibilité, il est important de lier chaque `<input>`,
`<select>`, `<textarea>`, etc à un élément `<label>` grâce aux attributs `name`
et `for`.

## Balises

### Indenter chaque balise.
Cela permet de visualiser plus facilement la hiérarchie des différents
éléments.

Exemple :

    <ul>
      <li>
        <a href="#">Lien</a>
      </li>
      <li>
        <a href="#">
          <span>Another link with a span in it</span>
        </a>
      </li>
    </ul>

### Toujours en minuscule.
Pour l'uniformité, toujours écrire les balises en minuscule. Seul le `<!DOCTYPE
html>` est une exception à la règle.

### Toujours fermer les balises.
Même si certaines balises comme `<body>`, `<li>`, `<dt>` ou `<dd>` peuvent ne
pas être fermées, le faire permet de mieux visualiser l'imbrication des
éléments.

### Ajouter un `/>` de fermeture pour les self-closing tags.
Même si ajouter `/>` est facultatif sur ces éléments, l'ajouter démontre bien
l'intention et non pas qu'on a oublié de fermer un tag.

Exemples :

    <img src="img.jpg"> BAD
    <img src="img.jpg /> GOOD

    <br> BAD
    <br /> GOOD

### Utiliser un minimum de balises.
Tirez profit du fait qu'on puisse ajouter plusieurs classes CSS à un même
élément pour éviter d'ajouter des balises `<span>` ou `<div>` inutiles.

    NOT SO GOOD
    <div class="avatar">
      <img src="img.jpg" />
    </div>

    BETTER
    <img src="img.jpg" class="avatar" />

## Attributs

### Toujours en minuscule.
Pour l'uniformité.

### Utiliser des double quotes.
Cela nous permet d'utiliser des single quotes dans le javascript et de pouvoir
ainsi écrire du javascript dans un attribut html et du html dans une string
javascript.

### Ne pas ajouter de valeurs aux attributs de type booleens.
Il est inutile d'ajouter une valeur aux attributs booléens, leur présence
signifie `true` et leur absence `false`.

    <input type="text" disabled="disabled" /> BAD
    <input type="text" disabled /> GOOD

### Questions ouvertes
_Quid de l'ordre des attributs ? Avoir les attributs toujours dans le même
ordre aide à la cohérence mais aussi à la compression gzip. Quel ordre
privilégier ? Alphabétiques ou par type ?_

## URL

### Utiliser des adresses relatives.
On privilegiera les urls de la forme `path/to/page.html` aux urls
`http://www.site.com/path/to/page.html` dans les attributs (`href` pour `a`,
`src` pour `script`, etc).

On pourra bien sur utiliser les urls absolues si on pointe vers un autre domaine.

Les syntaxes `href="./path/to/page.html"` et `href="path/to/file.html"` étant
équivalentes, on préferera la seconde car elle est plus succinte.

Si on doit utiliser des adresses absolues (limitation du CMS, profondeur de
lien trop complexe), on utilisera la syntaxe `//`, qui permet d'utiliser
`https` ou `http` en fonction du contexte.

Exemple :

    <a href="http://www.site.com/path/to/file.html">Lien</a> BAD
    <a href="/path/to/file.html">Lien</a> BAD
    <a href="./path/to/file.html">Lien</a> BAD

    <a href="path/to/file.html">Lien</a> GOOD
    <a href="//www.site.com/path/to/file.html">Lien</a> GOOD

## Images

### Toujours mettre un attribut `alt`.
Pour l'accessibilité, cela permet aux terminaux qui ne peuvent pas afficher
d'image d'avoir une information sur le contenu de l'image.

## Compatibilité

### Toujours utiliser le doctype HTML5.
Cela nous permet d'avoir la plus grande cohérence de rendu sur l'ensemble des
navigateurs.

### Toujours dire à IE d'utiliser la dernière version de son moteur de rendu.
L'ajout de la [balise
suivante](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e)
indique à IE d'utiliser la dernière version de son moteur de rendu. Sans cette
balise, il utilisera un fallback de compatibilité moins performant.

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">

### Toujours utiliser de l'UTF-8.
En plus d'avoir les fichiers html encodés en UTF-8 et le serveur qui les envoie
en précisant `Content-Type: text/html; charset=utf-8`, il est important
d'indiquer dans le `<head>` que la page est en UTF-8 avec la balise suivante :

    <meta charset="UTF-8">

## CSS

### Inclure les feuilles de style en haut de page.
Inclure les feuilles de style en haut de page permet au navigateur d'afficher
la mise en forme plus rapidement et d'éviter un
[FOUC](http://fr.wikipedia.org/wiki/FOUC).

Note : _Il peut parfois être nécessaire de déroger à cette règle en incluant les
feuilles de style secondaires en bas de page pour optimiser le temps de rendu
des styles principaux._

### Ne pas ajouter l'attribut `type="text/css"` sur les balises `<link>`.
Le type par défaut de la balise `<link>` est déjà `text/css`, il est inutile de
l'ajouter.

### Ne jamais utiliser la balise `<style>`.
Le css doit être chargé depuis un fichier CSS externe. En ajouter dans une
balise `<style>` dans le HTML rends sa maintenabilité beaucoup plus difficile.

### Ne JAMAIS utiliser l'attribut `style`.
Une règle CSS ajoutée depuis l'attribut `style` a la priorité la plus haute et
ne peux alors jamais être overridée par une feuille de style externe.

## Javascript

### Inclure les fichiers de scripts en bas de page.
Le navigateur bloque son execution pendant qu'il télécharge et parse un fichier
Javascript. En les mettant haut de page, on l'empeche d'afficher le contenu
tant que le fichier n'est pas complétement chargé. On préfère donc les mettre
en base de page.

### Ne pas utiliser de balise `<script>` inline.
Les fichiers HTML ne devraient contenir que du code HTML, le code Javascript
devrait se trouver dans des fichiers `.js` chargés séparemment. En mélangeant
les deux on rends la maintenabilité plus complexe.

### Ne pas ajouter l'attribut `type="text/javascript"` sur les balises `<script>`.
Le type par défaut de la balise `<script>` est déjà `text/javascript`, il est
inutile de l'ajouter.

## Configuration

### Vim
Si vous utilisez vim, vous pouvez ajouter ces lignes à votre `~/.vim/after/ftplugin/html.vim`

    " Deux espaces pour l'indentation
    setlocal tabstop=2
    setlocal shiftwidth=2
    setlocal softtabstop=2
    setlocal expandtab

## Outils

Le W3C avait mis à disposition [htmltidy](http://tidy.sourceforge.net/), un
outil pour tester la syntaxe et nettoyer un fichier `html`. Un fork a depuis vu
le jour, qui intègre les nouveautés html5 et offre plus de possibilités de
configuration, [tidy-html5](https://github.com/w3c/tidy-html5).

`tidycheck`, un wrapper en ruby autour de `tidy-html5`, présent dans ce
repository est une ébauche de script qui affiche les erreurs detectées dans un
fichier html sans chercher à les corriger.

Le package [js-beautify](https://github.com/einars/js-beautify)  comporte aussi
un script `html-beautify` qui permet de nettoyer un fichier html.
