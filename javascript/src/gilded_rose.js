class GildedRose {
  processEndOfDay(items) {
    for (let i = 0; i < items.length; i++) {
      this.processItemEndOfDay(items[i]);
    }
  }

  processQualityLessThan50(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  processAgedCheddar(item) {
    this.processQualityLessThan50(item);
    item.daysRemaining = item.daysRemaining - 1;
    if (item.daysRemaining < 0) {
      this.processQualityLessThan50(item);
    }
  }

  processConcertTickets(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.daysRemaining < 11) {
        this.processQualityLessThan50(item);
      }
      if (item.daysRemaining < 6) {
        this.processQualityLessThan50(item);
      }
    }
    item.daysRemaining = item.daysRemaining - 1;
    if (item.daysRemaining < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  processRawMilk(item){
    item.daysRemaining = item.daysRemaining -1;
    if (item.daysRemaining > 0) {
      item.quality = item.quality - 2;
    }
  }

  processNormalItem(item) {
    if (item.name !== "Hammer") {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
      item.daysRemaining = item.daysRemaining - 1;
      if (item.daysRemaining < 0) {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }
    }
  }

  processItemEndOfDay(item) {
    switch(item.name) {
      case "Aged Cheddar":
        this.processAgedCheddar(item);
        break;
      case "Concert Tickets":
        this.processConcertTickets(item);
        break;
      case "Raw Milk":
        this.processRawMilk(item);
        break;
      default:
        this.processNormalItem(item);
    }
  }
}

module.exports = {
  GildedRose,
};
