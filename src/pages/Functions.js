function volume_totale(longueur, largeur, profondeur, talus) {
    let S1 = longueur * largeur
    let S2 = (longueur - 2 * profondeur * talus) * (largeur - 2 * profondeur * talus)
    let volumeTotal = (profondeur / 3) * (S1 + S2 + Math.sqrt(S1 * S2))
    return volumeTotal;
}

function volume_utile(longueur, largeur, profondeur, talus) {
    let revanche = 0.5
    let S1 = longueur * largeur
    let S2 = (longueur - 2 * revanche * talus) * (largeur - 2 * revanche * talus)
    let volumeUtile = volume_totale(longueur, largeur, profondeur, talus) - (revanche / 3) * (S1 + S2 + Math.sqrt(S1 * S2))
    return volumeUtile;
}

function surface_geomembrane(longueur, largeur, profondeur, talus) {
    let longueur_du_talus = Math.sqrt(
        profondeur * profondeur + profondeur * talus * (profondeur * talus)
    );
    let surface_ancrage = ((longueur + largeur) * 4) + 16;

    let surface_utile =
        (longueur - 2 * profondeur * talus) * (largeur - 2 * profondeur * talus) +
        2 * ((2 * longueur - 2 * profondeur * talus) / 2) * longueur_du_talus +
        2 * ((2 * largeur - 2 * profondeur * talus) / 2) * longueur_du_talus;

    return (surface_utile + surface_ancrage) * 1.1;
}

function cloture(longueur, largeur) {
    return 2 * longueur + 2 * largeur + 8;
}

function calculFunction(option, parameters) {
    switch (option) {
        case 'volumeTotale':
            return volume_totale(parameters.longueur, parameters.largeur, parameters.profondeur, parameters.talus)
        case 'volumeUtile':
            return volume_utile(parameters.longueur, parameters.largeur, parameters.profondeur, parameters.talus)
        case "geomembrane":
            return surface_geomembrane(parameters.longueur, parameters.largeur, parameters.profondeur, parameters.talus)
        case "cloture":
            return cloture(parameters.longueur, parameters.largeur)
        default:
            return 'invalid option'
    }
}

export { calculFunction, volume_totale, volume_utile, surface_geomembrane, cloture }