// Objetivo: se utiliza para memorizar una instancia de una función
// hace que un hijo no renderize

import { memo, useCallback, useState } from "react";

// Ejemplo:
// supongamos que tienes un número de telefono al que llamamos con frecuencia.
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos del telefono.
// A menos que el número cambie siempre utilzo el mismo contacto.

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContacProps {
  contact: Contact;
  onCall: (phone: string) => void
}

const ContactCard = memo(({ contact, onCall }: ContacProps) => {
  console.log(`Renderizando contacto ${contact.name}`)
  return (
    < div >
      <h3>{contact.name}</h3>
      <p>Teléfono: {contact.phone}</p>
      <button onClick={() => onCall(contact.name)}>Llamar</button>
    </div >
  )
})

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Noelia",
      phone: "987 987 987"
    },

    {
      id: 2,
      name: "Flor",
      phone: "456 456 456"
    },

    {
      id: 3,
      name: "Jessica",
      phone: "123 123 123"
    }
  ])

  const [log, setLog] = useState<string>('')

  const makeCall = useCallback((name: string) => setLog(`Llamando al ${name}`), [])

  const addContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `${Math.floor(10000000 + Math.random() * 900000000000)}`,
    }

    setContacts([...contacts, newContact])
  }

  return (
    <div>
      <h2>Agenda de Contactos</h2>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}
      <button onClick={addContact}>Agregar contacto</button>
      <p>{log}</p>
    </div>
  )
}
