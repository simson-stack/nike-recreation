import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-6">
      {services.map((service, index) => (
        <ServiceCard key={service.label}  {...service}/>
      ))}
    </section>
  )
}

export default Services