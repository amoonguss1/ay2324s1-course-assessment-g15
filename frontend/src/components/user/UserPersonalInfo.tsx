import { Input, Box, Text, Flex, Spacer, Image, Center, Button, Circle } from "@chakra-ui/react";
import User from "../../models/User";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../CommonStyles";
import { useState } from "react";

interface PersonalInfoProps {
  user: User;
}

const UserPersonalInfo: React.FC<PersonalInfoProps> = ({ user }) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [name, setName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);

  return (
    <Box border={'1px solid white'} borderRadius={5} p={5} width={'70%'} backgroundColor={SECONDARY_COLOR}>
      <Box marginBottom={10}>
        <Text as='b' fontSize={25}>
          Personal Info
        </Text>
      </Box>
      <Flex>
        <Box mr={'10%'} ml={'20%'}>
          <Image src='src\assets\images\tech_lead.jpg' height={200} clipPath={'circle()'} />
        </Box>
        <Box>
          <Box marginBottom={3}>
            <Text as='b' padding={3}>Name</Text>
          </Box>
          <Flex>
            {isEditingName ?
              <Input
                value={name}
                background={PRIMARY_COLOR}
                onChange={(e) => setName(e.target.value)} padding={3}
              /> :
              <Input
                isReadOnly border={'none'}
                value={user.userName}
                background={SECONDARY_COLOR}
                padding={3}
              />
            }
            <Spacer />
            <Center
              width={5}
              cursor={'pointer'}
              onClick={() => setIsEditingName(true)}
            >
              {isEditingName ? null : <Image src='src\assets\images\edit.png' />}
            </Center>
          </Flex>

          <Box marginBottom={3} marginTop={10}>
            <Text as='b' padding={3}>Email Address</Text>
          </Box>
          <Flex>
            {isEditingEmail ?
              <Input
                value={email}
                background={PRIMARY_COLOR}
                onChange={(e) => setEmail(e.target.value)}
                padding={3}
              /> :
              <Input
                isReadOnly border={'none'}
                value={user.email}
                background={SECONDARY_COLOR}
                padding={3} />
            }
            <Spacer />
            <Center
              width={5}
              cursor={'pointer'}
              onClick={() => setIsEditingEmail(true)}>
              {isEditingEmail ? null : <Image src='src\assets\images\edit.png' />}
            </Center>
          </Flex>
        </Box>
      </Flex>
      <Button
        colorScheme={'blue'}
        float={'right'}
        marginTop={10}
        isDisabled={!(isEditingEmail || isEditingName)}
      >
        Save
      </Button>

    </Box >
  );
};

export default UserPersonalInfo;