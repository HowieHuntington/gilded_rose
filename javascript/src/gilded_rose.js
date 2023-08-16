class GildedRose {
  processEndOfDay(items) {
    for (let i = 0; i < items.length; i++) {
      this.processItemEndOfDay(items[i]);
    }
  }

  processAgedCheddar(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.daysRemaining = item.daysRemaining - 1;
    if (item.daysRemaining < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  processConcertTickets(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.daysRemaining < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
      if (item.daysRemaining < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
    item.daysRemaining = item.daysRemaining - 1;
    if (item.daysRemaining < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  processNormalItem(item) {
    if (item.quality > 0) {
      if (item.name != "Hammer") {
        item.quality = item.quality - 1;
      }
    }
    if (item.name != "Hammer") {
      item.daysRemaining = item.daysRemaining - 1;
    } 
    if (item.daysRemaining < 0) {
      if (item.quality > 0) {
        if (item.name != "Hammer") {
          item.quality = item.quality - 1;
        }
      }
    }
  }

  processItemEndOfDay(item) {
    if(item.name === "Aged Cheddar") {
      this.processAgedCheddar(item);
    } else if (item.name === "Concert Tickets") {
      this.processConcertTickets(item);
    } else {
      this.processNormalItem(item);
    }
  }
}

module.exports = {
  GildedRose,
};
