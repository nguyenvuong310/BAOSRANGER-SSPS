import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const HomeCard = ({ text, imageUrl }) => {
  return (
    <Card
      shadow={false}
      className="relative grid h-96 w-full transform items-end justify-center overflow-hidden text-center transition duration-500 hover:scale-110 lg:w-72"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80/')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative px-6 py-14 md:px-12">
        <Typography
          color="white"
          className="mb-6 text-lg font-bold leading-[1.5]"
        >
          {text}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default HomeCard;
