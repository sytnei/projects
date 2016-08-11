<?php
// src/AppBundle/Entity/User.php
namespace AppBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * User
 *
 * @ORM\Table("fos_user")
 * @ORM\Entity
 */
class User extends BaseUser {
	/**
	 * @var integer
	 *
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var ArrayCollection
	 * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Company", inversedBy="users")
	 * @ORM\JoinColumn(name="company_id", referencedColumnName="id", nullable=true)
	 */
	protected $company;


	/**
	 * @ORM\Column(type="integer")
	 */
	protected $company_id;

	public function __construct() {
		parent::__construct();
	}

	/**
	 * Get id
	 *
	 * @return integer
	 */
	public function getId() {
		return $this -> id;
	}

	/**
	 * Set company
	 *
	 * @param Company $company
	 * @return User
	 */
	public function setCompany($company) {
		if ($company === null) {
			if ($this -> company !== null) {
				$this -> company -> getUsers() -> removeElement($this);
			}
			$this -> company = null;
		}
		else {
			//if (!$company instanceof AppBundle\Entity\Company) {
			//	throw new \InvalidArgumentException('$company must be null or instance of AppBundle\Entity\Company');
			//}
			if ($this -> company !== null) {
				$this -> company -> getUsers() -> removeElement($this);
			}
			$this -> company = $company;
			$company -> getUsers() -> add($this);
		}
	}

	/**
	 * Get company
	 *
	 * @return Company
	 */
	public function getCompany() {
		return $this -> company;
	}
	
	/**
	 * Get company
	 *
	 * @return Company
	 */
	public function getCompanyId() {
		return $this -> company_id;
	}

	public function hasRoleAdmin() {
		return $this -> hasRole('ROLE_ADMIN');
	}

	public function setHasRoleAdmin($isAdmin) {
		if (true == $isAdmin && false == $this -> hasRole('ROLE_ADMIN')) {
			$this -> addRole('ROLE_ADMIN');

		}
		if (false == $isAdmin && true == $this -> hasRole('ROLE_ADMIN')) {
			$this -> removeRole('ROLE_ADMIN');
		}
		$this -> isAdmin = $isAdmin;
	}

}
