# Guidelines pour les développeurs front-end

Ces guidelines ont pour but de permettre aux développeurs front d'avoir un
ensemble de conventions partagées qui peuvent être réutilisées de projet en
projet.

Ces conventions ne sont pas faites pour être appliquées à la lettre et vous
êtes invités à les discuter et les modifier pour vos propres projets. 

La seule règle capitale est que tous les développeurs doivent suivre les mêmes
convention. Le code dans son ensemble doit sembler avoir été écrit par la même
personne.

## Paramètres d'IDE
Ces configurations permettent de s'assurer d'avoir un rendu consistant sur
toutes les plateformes et IDE. Ils évitent aussi d'avoir des diff entre deux
versions à chaque fois qu'un fichier est enregistré sur un poste différent.

La majorité des IDE permettent de configurer ces options. Si votre IDE ne le
permet pas, changez d'IDE.

Si votre IDE [l'accepte](http://editorconfig.org/), vous trouverez un fichier
`.editorconfig` dans le dossier `tools/editor`.

### Indenter avec 2 espaces
C'est la configuration utilisée par html5boilerplate. L'important est que tout
le monde dans le projet utilise la même indentation.

### Enregistrer les fichier en UTF-8.
Permet d'assurer la meilleur compatibilité d'encoding. Vérifiez bien que votre
IDE n'ajoute pas de [BOM](http://en.wikipedia.org/wiki/Byte_order_mark).

### Utiliser le délimiteur de new line Unix (LF).
Le [séparateur](http://blog.codinghorror.com/the-great-newline-schism/) Unix
(LF) est utilisé par html5boilerplate. Il utilise moins de bytes que le
séparateur Windows et est plus répandu que le séparateur Mac.

### Ne pas laisser d'espaces en fin de ligne.
Ces caractères sont inutiles.

### Ajouter un saut de ligne en fin de fichier.
Ou plutot, [ne pas supprimer le saut de
ligne](http://unix.stackexchange.com/questions/18743/whats-the-point-in-adding-a-new-line-to-the-end-of-a-file)  qui devrait y être.

## Ressources
- [GitHub styleguide](https://github.com/styleguide)
- [Code Guide by @mdo](http://mdo.github.io/code-guide/) ([version
  française](https://pixelastic.github.io/code-guide/))
- [Idiomatic.js](https://github.com/rwaldron/idiomatic.js)
- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [jQuery styleguide](https://contribute.jquery.org/style-guide/js/)
- [Configurer Eclipse pour les new lines et les indentations](http://eclipsesource.com/blogs/2013/07/09/invisible-chaos-mastering-white-spaces-in-eclipse/)
- [Google's Web Fundamentals and Web Starter Kit](http://googledevelopers.blogspot.fr/2014/06/web-fundamentals-and-web-starter-kit.html)


## Todo

- utiliser des id en js, extrémement rapide
- ajouter des styles pour :focus, :active, :hover
- angular style guide : https://github.com/mgechev/angularjs-style-guide
- ajouter la config git pour forcer la sauvegarde de fichiers en LF plutot que
  CRLF.
- ajouter un hook qui empeche de commiter des fichiers qui ne sont pas en utf8


