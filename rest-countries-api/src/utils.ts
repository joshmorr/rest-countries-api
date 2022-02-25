export function formatPopulation(population: number): string {
    return new Intl.NumberFormat().format(population);
}