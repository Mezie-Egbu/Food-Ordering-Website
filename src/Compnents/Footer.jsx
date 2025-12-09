import { socialhandles } from "../Data/data";
import { ourContacts } from "../Data/data";
import { address } from "../Data/data";

export default function Footer() {
  return (
    <div
      id="Contact"
      className="bg-gray-600 text-gray-400 md:flex justify-around py-10"
    >
      <div className="p-5 text-center md:border-r md:px-10 md:text-left">
        <ul>
          {socialhandles.map((handles) => (
            <li key={handles.title}>{handles.title}</li>
          ))}
        </ul>
      </div>
      <div className="text-center p-5 md:border-x md:px-10 md:w-1/3 ">
        {address.map((location) => (
          <div key={location.title}>
            <h1>{location.title}</h1>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center p-5 md:border-l md:px-10 md:text-right">
        <ul>
          {ourContacts.map((contacts) => (
            <li key={contacts.id}>{contacts.number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
