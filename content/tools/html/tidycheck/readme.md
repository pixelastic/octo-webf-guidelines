# Tidycheck

Tidycheck est un wrapper ruby autour de `html5tidy` qui output simplement les
erreurs sans chercher à les corriger automatiquement.

Il utilise pour cela le fichier `~/.tidycheckrc` (dont un exemplaire est fourni
dans ce dossier), et exclue certaines erreurs de son listing.

Le script est actuellement très sommaire et mériterai d'être amélioré.
