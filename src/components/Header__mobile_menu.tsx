import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Header.module.scss';
import {
  Button,
  Input,
  ActionIcon,
  Drawer,
  Group,
  Modal,
  Stack,
} from '@mantine/core';
import {
  Search,
  Menu2,
  TextCaption,
  BrandMailgun,
  TextColor,
  Hash,
  ExternalLink,
  FileSymlink,
  FileTime,
} from 'tabler-icons-react';

export default function Header__menu() {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const isHomePage = router.pathname === '/';
  const isOrganisationsPage = router.pathname === '/organisations';
  const isOrganisationPage = /\/organisations\/.+/.test(router.pathname);
  const isRegisterPage = /\/organisations\/.+\/.+/.test(router.pathname);
  const [orgModalOpened, setOrgModalOpened] = useState(false);
  const [regModalOpened, setRegModalOpened] = useState(false);
  const [createRecModalOpened, setCreateRecModalOpened] = useState(false);
  const [invaliRecModalOpened, setInvaliRecModalOpened] = useState(false);
  return (
    <div>
      <div className={styles.header__burger}>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title='Menu'
          padding='xl'
          size='xl'
          position='right'
        >
          <ActionIcon className={styles.search__button}>
            <Search />
          </ActionIcon>
          <Input
            icon={<Search />}
            placeholder='Enter Org or Reg address'
            radius='md'
            size='md'
          />
          {isHomePage ? null : null}
          {isOrganisationsPage ? (
            <div className={styles.header__mobile_menu}>
              <Button radius='md' onClick={() => setOrgModalOpened(true)}>
                Create Organisation
              </Button>
              <Modal
                opened={orgModalOpened}
                onClose={() => setOrgModalOpened(false)}
                title='To create Organisation fill in the forms please.'
              >
                <Stack>
                  <Input icon={<TextColor />} placeholder='Name' />
                  <Input icon={<TextCaption />} placeholder='Description' />
                  <Input icon={<BrandMailgun />} placeholder='Contacts' />
                  <Button radius='md' color='red'>
                    Create Organisation
                  </Button>
                </Stack>
              </Modal>
            </div>
          ) : null}
          {isOrganisationPage && !isRegisterPage ? (
            <div className={styles.header__mobile_menu}>
              <Button radius='md' onClick={() => setOrgModalOpened(true)}>
                Update Organisation
              </Button>
              <Modal
                opened={orgModalOpened}
                onClose={() => setOrgModalOpened(false)}
                title='Fill in the forms you want to update.'
              >
                <Stack>
                  <Input icon={<TextColor />} placeholder='Organisation name' />
                  <Input
                    icon={<TextCaption />}
                    placeholder='Organisation description'
                  />
                  <Input
                    icon={<BrandMailgun />}
                    placeholder='Organisation contacts'
                  />
                  <Button radius='md' color='red'>
                    Update Organisation
                  </Button>
                </Stack>
              </Modal>
              <Button radius='md' onClick={() => setRegModalOpened(true)}>
                Deploy Register
              </Button>
              <Modal
                opened={regModalOpened}
                onClose={() => setRegModalOpened(false)}
                title='To create Register fill in the forms'
              >
                <Stack>
                  <Input icon={<TextColor />} placeholder='Register name' />
                  <Input
                    icon={<TextCaption />}
                    placeholder='Register description'
                  />
                  <Input
                    icon={<BrandMailgun />}
                    placeholder='Register contacts'
                  />
                  <Button radius='md' color='red'>
                    Deploy Register
                  </Button>
                </Stack>
              </Modal>
            </div>
          ) : null}
          {isRegisterPage ? (
            <div className={styles.header__mobile_menu}>
              <Button radius='md' onClick={() => setCreateRecModalOpened(true)}>
                Create Record
              </Button>
              <Modal
                opened={createRecModalOpened}
                onClose={() => setCreateRecModalOpened(false)}
                title='To create Record fill in the forms'
              >
                <Stack>
                  <Input icon={<Hash />} placeholder='Document hash' />
                  <Input icon={<FileSymlink />} placeholder='Source Document' />
                  <Input
                    icon={<ExternalLink />}
                    placeholder='Reference Document'
                  />
                  <Input icon={<FileTime />} placeholder='Starts at' />
                  <Input icon={<FileTime />} placeholder='Expires at' />
                  <Input icon={<Hash />} placeholder='Past Document Hash' />
                  <Button radius='md' color='red'>
                    Create Record
                  </Button>
                </Stack>
              </Modal>
              <Button radius='md' onClick={() => setInvaliRecModalOpened(true)}>
                Invalidate Record
              </Button>
              <Modal
                opened={invaliRecModalOpened}
                onClose={() => setInvaliRecModalOpened(false)}
                title='To invalidate Record fill in the forms'
              >
                <Stack>
                  <Input icon={<Hash />} placeholder='Document hash' />
                  <Button radius='md' color='red'>
                    Invalidate Record
                  </Button>
                </Stack>
              </Modal>
              <Button radius='md' onClick={() => setRegModalOpened(true)}>
                Update Register
              </Button>
              <Modal
                opened={regModalOpened}
                onClose={() => setRegModalOpened(false)}
                title='Fill in the forms you want to update.'
              >
                <Stack>
                  <Input icon={<TextColor />} placeholder='Register name' />
                  <Input
                    icon={<TextCaption />}
                    placeholder='Register description'
                  />
                  <Input
                    icon={<BrandMailgun />}
                    placeholder='Register contacts'
                  />
                  <Button radius='md' color='red'>
                    Update Register
                  </Button>
                </Stack>
              </Modal>
            </div>
          ) : null}
        </Drawer>
        <Group position='center'>
          <Button onClick={() => setOpened(true)} variant='subtle' compact>
            <Menu2 size={25} />
          </Button>
        </Group>
      </div>
    </div>
  );
}
