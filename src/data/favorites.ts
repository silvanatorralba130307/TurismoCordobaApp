let favoriteIds: number[] = [];

export function isDestinationFavorite(id: number) {
  return favoriteIds.includes(id);
}

export function toggleDestinationFavorite(id: number) {
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter(
      (favoriteId) => favoriteId !== id
    );

    return false;
  }

  favoriteIds = [...favoriteIds, id];

  return true;
}