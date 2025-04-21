type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type topType = Pick<AllType, "name" | "color">;
type bottomType = Pick<AllType, "position" | "weight">;

function compare(top: topType, bottom: bottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

//============================================
const X = compare(
  { name: "poly", color: "black" },
  { position: 50, weight: 500 }
);

console.log(X);
