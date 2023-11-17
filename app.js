const nbJoursDansLeMois = () => {
    const dateActuelle = new Date();
    return new Date(dateActuelle.getFullYear(), dateActuelle.getMonth() + 1, 0).getDate();
};

module.exports = nbJoursDansLeMois;
