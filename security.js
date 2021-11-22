if((traveler.alreadyHadTheVirus && traveler.recovered) || (traveler.isVaccinated)){
    traveler.isImmune = true;
} else {
    traveler.isImmune = false;
}
