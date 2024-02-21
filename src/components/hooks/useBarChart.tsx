
interface chartData {
  date: string;
  signUps: number;
}

function useBarChart(){
     const data: chartData[] = [
       {
         date: "2023-12-27",
         signUps: 2,
       },
       {
         date: "2023-12-26",
         signUps: 5,
       },
       {
         date: "2023-12-25",
         signUps: 9,
       },
       {
         date: "2023-12-24",
         signUps: 4,
       },
       {
         date: "2023-12-23",
         signUps: 2,
       },
       {
         date: "2023-12-22",
         signUps: 7,
       },
       {
         date: "2023-12-21",
         signUps: 3,
       },
       {
         date: "2023-12-20",
         signUps: 12,
       },
       {
         date: "2023-12-19",
         signUps: 9,
       },
       {
         date: "2023-12-18",
         signUps: 7,
       },
       {
         date: "2023-12-17",
         signUps: 2,
       },
       {
         date: "2023-12-16",
         signUps: 3,
       },
       {
         date: "2023-12-15",
         signUps: 3,
       },
       {
         date: "2023-12-14",
         signUps: 5,
       },
       {
         date: "2023-12-13",
         signUps: 8,
       },
       {
         date: "2023-12-12",
         signUps: 13,
       },
       {
         date: "2023-12-11",
         signUps: 7,
       },
       {
         date: "2023-12-10",
         signUps: 2,
       },
       {
         date: "2023-12-09",
         signUps: 5,
       },
       {
         date: "2023-12-08",
         signUps: 3,
       },
     ];
return data
}

export default useBarChart